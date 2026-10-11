# David Zhihao Xu — Personal Portfolio

Live website: https://davidxu18.com/

A static portfolio focused on data engineering and applied AI, with a separate travel photo gallery. GitHub Pages publishes the `main` branch of `ZhihaoXu18/ZhihaoXu18.github.io`.

## Files

- `index.html`: portfolio content and project cards.
- `travel.html`: travel gallery.
- `style.css`: shared responsive layout and accessibility styles.
- `script.js`: current-year copyright in the portfolio footer.
- `Asset/`: photographs and education images.
- `CNAME`: custom domain configuration.

## Local preview

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000/. No installation or build step is required.

## Updating the website

Keep both pages on the same stylesheet version. When changing CSS, update the `style.css?v=...` value in both HTML files to refresh browser caches. Gallery images share a uniform height at each screen size.

Before uploading, run `git diff --check` and `node --check script.js`, check local image paths and navigation links, and review both pages at desktop and mobile widths. After syncing `main`, confirm the GitHub Pages deployment succeeds and check the live domain.

Keep project claims tied to demonstrated work. JobApply is an ongoing project; private résumés, application records, and credentials belong outside this website repository.
