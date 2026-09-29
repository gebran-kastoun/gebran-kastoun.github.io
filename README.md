# Gebran Kastoun — engineering portfolio

A static portfolio for `https://gebran-kastoun.github.io`. Three engineering categories lead to five canonical project pages. Includes a separate TinyRV1 companion section, Experience, About, Resume, a sitemap, and a 404 page.

## Local development

Requires Node.js 22.13+ and npm; Python 3 is used for the static preview and output verification.

```sh
npm --prefix site ci
npm run dev
```

Open the URL printed by the server (normally `http://127.0.0.1:3000`). The implementation uses the provided Sites Vinext/React/TypeScript starter. It requires no hosted service, backend, analytics, remote fonts, or CMS.

## Production build and checks

```sh
npm run check
npm run build
npm run verify
npm run preview
```

Preview the **actual static build** at `http://127.0.0.1:4173`. Delivery files are in `site/dist/client/`, including directory-index routes and `404.html`. Build prerendering briefly opens a loopback port; restricted environments may need to permit this.

The site has no client-side interactions requiring JavaScript. `site/scripts/postbuild.mjs` removes hydration scripts and generated JS/RSC payloads, normalizes routes to `path/index.html`, and creates `sitemap.xml` and `.nojekyll`. Native links and the Work disclosure menu continue to function without JS. If a future feature needs client JS, deliberately update this export step and its verification.

Vinext's pinned version redirects slash-terminated prerender requests. `trailingSlash: false` lets its exporter render successfully; postbuild creates the requested slash-terminated GitHub Pages directory structure. All public links and canonical URLs use trailing slashes. Development may redirect to a non-slash URL; production uses the directory index.

`verify` checks all output pages, internal links, section anchors, image dimensions/alt text, metadata, the sitemap, private-content markers, and the public-asset allowlist. Also inspect representative desktop/phone layouts, keyboard navigation, focus, and the console after significant layout changes.

## Content and components

- `site/content/projects.ts`: typed project records and section bodies. Fields include slug, title, summary, categories, featured placement, role, dates, context, platform, status, technologies, media, captions, results, links, and body sections.
- `site/content/experience.ts`: experience summaries.
- `site/content/resumes.ts`: reviewed public PDF downloads. Empty until actual public-safe files are supplied; the Resume page has an email request link.
- `site/components/ProjectCard.tsx`: shared cards/features and tags.
- `site/components/ProjectVisual.tsx`: authentic project photo and labeled explanatory architecture diagrams.
- `site/app/projects/[slug]/page.tsx`: shared project layout and in-page navigation.
- `site/app/work/[slug]/page.tsx`: category features, additional projects, and TinyRV1 companion.
- `site/app/globals.css`: typography, colors, grid, responsive behavior, and focus treatment.

To add a project, add a typed record with a unique slug. Use a category slug from `categories`, add supported sections and public links, and choose or add a visual. Routes are generated automatically. Update the output verifier's expected project list. A project can belong to multiple categories while retaining one canonical URL. To add a fourth discipline, extend `categories`, the header links, and homepage discipline data; no route/layout redesign is needed.

To add a resume, inspect the PDF content and metadata, remove phone/home address unless explicitly approved, put only the approved file in `site/public/resumes/`, and add its title/description/path to `resumes.ts`. Suggested filenames: `gebran-kastoun-hardware-resume.pdf` and `gebran-kastoun-embedded-resume.pdf`.

## Sources and editorial boundaries

Project descriptions use the supplied brief. The drawing-car page also uses the [public team report](https://ece4760.github.io/Projects/Fall2025/sjz44_glk49_rcw253/final_report.html), credits Gebran Kastoun, Ruby Wu, and Sarah Zhong, and identifies Gebran's BNO055 driver contribution. The car photograph comes from that report and is locally optimized. Other visuals are explicitly illustrative functional diagrams, not hardware photos or measurements.

The local evidence checklist is `.local/content-evidence-checklist.md`, outside the app and ignored by Git. Keep private notes, resume archives, course solutions, and any `sources/` directory out of `public/` and out of imported content. Static assets are public even when unlinked. Validate permission for photos and employer/team artifacts before public release.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` builds on pushes to `main` and can also be started manually from Actions. The Pages source must be **GitHub Actions** in Settings → Pages.

The build job installs locked dependencies with Node 22, audits tracked files, checks TypeScript, builds the Vinext static export, and verifies its routes/assets. It uploads **only `site/dist/client/`**. A separate deployment job uses GitHub's `github-pages` environment with `pages: write` and `id-token: write`; no personal token or deployment secret is needed. In-progress deployments are not canceled by later pushes.

The account-root site is `https://gebran-kastoun.github.io/`, so no repository-name base path is needed. Canonicals and the sitemap use that origin. Do not upload the repository root, `site/dist/server/`, source archives, local notes, or `node_modules`.

Before committing, run `python3 site/scripts/audit-repository.py` against the staged/tracked file set. It rejects private-input directories, source documents, symlinks, and recognizable credential formats. Approved resume PDFs belong only in `site/public/resumes/`; inspect them before adding.
