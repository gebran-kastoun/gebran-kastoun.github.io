"""Check the actual static delivery surface, not component implementation details."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET
root=Path('dist/client').resolve()
class Page(HTMLParser):
 def __init__(self,html):
  super().__init__(); self.ids=set(); self.links=[]; self.assets=[]; self.headings=[]; self.meta={}; self.canonical=[]; self.scripts=0; self.title=''; self.in_title=False; self.feed(html)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a: self.ids.add(a['id'])
  if tag=='a': self.links.append(a.get('href',''))
  if tag=='script': self.scripts+=1
  if tag=='title': self.in_title=True
  if tag in ['h1','h2','h3','h4']:self.headings.append(int(tag[1]))
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='link' and a.get('rel') in ['stylesheet','icon']:self.assets.append(a.get('href',''))
  if tag in ['source','track'] or (tag=='video' and a.get('src')): self.assets.append(a.get('src',''))
  if tag=='video' and a.get('poster'): self.assets.append(a['poster'])
  if tag=='img':
   assert a.get('alt') and a.get('width') and a.get('height'), 'Image lacks alt or dimensions'
   self.assets.append(a.get('src',''))
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
 def handle_data(self,data):
  if self.in_title:self.title+=data
pages={p:Page(p.read_text()) for p in root.rglob('*.html')}
expected=['/','/about/','/experience/','/projects/','/resume/','/spacex/','/suas-2026/','/work/power-electronics/','/work/robotics-embedded/','/work/digital-design/']+['/projects/'+s+'/' for s in ['autonomous-drawing-car','gimbal-controller','tinyrv2-processor','avionics-power-converter','galton-board']]
errors=[];checked=0;external=set()
for route in expected:
 p=root / route.lstrip('/') / 'index.html'
 if p not in pages: errors.append(f'Missing route {route}')
for path,page in pages.items():
 rel=path.relative_to(root).as_posix();route='/' if rel=='index.html' else '/'+rel.removesuffix('index.html')
 if page.headings.count(1)!=1:errors.append(f'{rel}: expected exactly one h1')
 if page.scripts:errors.append(f'{rel}: unexpected client script')
 if not page.title or not page.meta.get('description'):errors.append(f'{rel}: missing title/description')
 if rel!='404.html':
  canonical='https://gebran-kastoun.github.io'+route
  if page.canonical!=[canonical]:errors.append(f'{rel}: canonical {page.canonical}, expected {canonical}')
  if not page.meta.get('og:title') or not page.meta.get('og:description'):errors.append(f'{rel}: missing social metadata')
 for url in page.links+page.assets:
  parts=urlsplit(url)
  if parts.scheme or parts.netloc:
   if parts.scheme in ['http','https']:external.add(url)
   continue
  if not url:errors.append(f'{rel}: empty link');continue
  if not parts.path:target=path
  else:
   target=(root/parts.path.lstrip('/')) if parts.path.startswith('/') else path.parent/parts.path
   if target.is_dir():target=target/'index.html'
  if not target.exists():errors.append(f'{rel}: missing {url}')
  elif parts.fragment and target in pages and unquote(parts.fragment) not in pages[target].ids:errors.append(f'{rel}: missing anchor {url}')
  checked+=1
 for marker in ['content-evidence-checklist','/Users/','coming soon','97%','2,000 balls','50% reduction','144 W','Untitled site']:
  if marker in path.read_text():errors.append(f'{rel}: unexpected content {marker}')
urls={e.text for e in ET.parse(root/'sitemap.xml').findall('.//{*}loc')}
generated_routes={'https://gebran-kastoun.github.io'+('/' if p.relative_to(root).as_posix()=='index.html' else '/'+p.relative_to(root).as_posix().removesuffix('index.html')) for p in pages if p.name!='404.html'}
assert urls==generated_routes,'Sitemap route mismatch'
assert (root/'404.html').exists() and (root/'.nojekyll').exists()
allowed={'.html','.css','.jpg','.svg','.txt','.xml','.png','.webp','.avif','.jpeg','.mp4','.webm','.vtt','.pdf'}
for file in root.rglob('*'):
 if file.is_symlink(): errors.append(f'Public symlink: {file.relative_to(root)}')
 if {'.local','sources','private','notes','node_modules','.git'}.intersection(file.relative_to(root).parts): errors.append(f'Private/generated path in output: {file.relative_to(root)}')
 if file.is_file() and file.name!='.nojekyll' and file.suffix not in allowed:errors.append(f'Unexpected public asset: {file.relative_to(root)}')
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} HTML pages; {checked} internal links, anchors and assets; unique h1s; metadata; sitemap; no client JS or private markers.')
print(f'Public output: {sum(p.stat().st_size for p in root.rglob("*") if p.is_file()):,} bytes')
print('External links for review:\n'+'\n'.join(sorted(external)))
