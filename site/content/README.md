# Adding projects and media

`projects.ts` is the project catalog; `types.ts` defines its fields. Routes, category cards, related projects, and static exports are generated from these records. Keep existing slugs and section IDs stable so incoming links continue to work.

To add a project, append a `Project` record with a unique slug, title, shortTitle, summary, category slug(s), role/contribution, context, platform, status, technologies, caption, resource links, and substantive sections. Optional dates and results must be supported by source material. No page or layout edits are needed. The category's `featured` slug determines the featured card and PCB preview. Other matching projects appear automatically.

Use `cover` for an image (see the existing `drawingCarPhoto` in `media.ts`). Set `fit: 'contain'` when a diagram must remain fully visible; photos default to cropping. A cover takes precedence over an optional `media` architecture diagram. A project with neither remains a text card; do not create fake images or placeholders. `gallery` is an optional array of `ProjectMedia` records. Omit it until real media are available. Empty galleries render nothing.

For a PCB revision comparison, add `boardComparison` to the project record with a title, one summary paragraph, and a `revisions` array. Each revision has a title, a 3D `render` image, and a 2D `layout` image. The project page renders the comparison automatically; see `gimbal.ts` for an example.

For a prominent YouTube demonstration near the top of a project page, add `featuredVideo` with `provider: 'youtube'`, the video ID, a descriptive title, and a short caption. The embed uses YouTube’s privacy-enhanced domain and includes a direct watch link.

Put approved public files in `site/public/images/` or `site/public/videos/`, and use root-relative URLs such as `/images/my-project.jpg`. Image records require actual width, height, meaningful alt text, and a caption, with an optional credit link. Video records require src, title, width, height, and caption; optionally add a real poster image, WebVTT captions (src/language/label), and transcript. Videos have native controls, never autoplay, and load only metadata. Provide captions for speech and a transcript for substantive audio before publishing. External demonstrations can remain ordinary resource links, without third-party embeds.

Resize/compress photographs and videos before adding them. Strip personal location metadata, review visible personal information, and keep private originals and source documents outside public/. Only files intended for the portfolio should go in public/.

Run `npm run check`, `npm run build`, and `npm run verify` from the repository root. The verifier allows new generated project routes while protecting established URLs and checking image, video, poster, and caption paths. Preview the actual static build with `npm run preview`.
