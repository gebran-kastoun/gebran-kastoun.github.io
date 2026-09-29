"""Fail closed on private inputs or recognizable credentials in tracked files."""
from pathlib import Path
import re
import subprocess

root = Path(__file__).resolve().parents[2]
paths = subprocess.check_output(['git', 'ls-files', '-z'], cwd=root).decode().split('\0')
blocked_dirs = {'.local', 'sources', 'private', 'notes', 'attachments', '.codex', '.agents', 'node_modules', '.git', 'dist', 'out', '.wrangler'}
source_extensions = {'.doc', '.docx', '.xlsx', '.xls', '.ppt', '.pptx', '.pem', '.key', '.p12', '.pfx'}
patterns = [
    re.compile(rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'),
    re.compile(rb'\bgh[pousr]_[A-Za-z0-9]{30,}\b'),
    re.compile(rb'\bgithub_pat_[A-Za-z0-9_]{40,}\b'),
    re.compile(rb'\bAKIA[0-9A-Z]{16}\b'),
    re.compile(rb'\bsk-(?:proj-)?[A-Za-z0-9_-]{40,}\b'),
]
errors = []
for name in filter(None, paths):
    rel = Path(name)
    file = root / rel
    if blocked_dirs.intersection(rel.parts) or rel.name.startswith('.env') or rel.suffix.lower() in source_extensions:
        errors.append(f'Private/generated file tracked: {name}')
    if rel.suffix.lower() == '.pdf' and not name.startswith('site/public/resumes/'):
        errors.append(f'Unreviewed source PDF tracked: {name}')
    if file.is_symlink():
        errors.append(f'Tracked symlink requires review: {name}')
        continue
    data = file.read_bytes()
    if any(pattern.search(data) for pattern in patterns):
        errors.append(f'Possible credential in {name}; value withheld')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: audited {len(list(filter(None, paths)))} tracked files; no private inputs or recognizable credentials.')
