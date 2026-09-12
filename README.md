# Pratibimb 4.0

Digital home of **Pratibimb**, the annual magazine of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering, New Delhi.

This is a static React site. There is no backend. Editors should be able to update magazines, team, and copy without rewriting the UI.

## Run locally

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Stack

- React (JavaScript, not TypeScript)
- Vite
- Tailwind CSS
- DaisyUI
- React Router

## Where to edit things

| Task | File or folder |
| --- | --- |
| Publish the current issue | Drop `pratibimb.pdf` into `public/assets/editions/pratibimb/` |
| Add a new magazine | `src/data/editions.js` plus a PDF in `public/assets/editions/` |
| Change About text | `src/data/siteContent.js` (`about`) |
| Change the tagline, nav, footer | `src/data/siteContent.js` (`site`) |
| Change editorial notes | `src/data/siteContent.js` (`editorial`) |
| Change Explore sections | `src/data/siteContent.js` (`categories`) |
| Change team members | `src/data/team.js` |
| Replace the logo | `public/assets/logo/pratibimb-logo.webp` (keep that filename) |
| Replace team photographs | `public/assets/team/` (keep the filenames listed below) |
| Change team names or roles | `src/data/team.js` |
| Change themes | `tailwind.config.js` (colors) and `src/data/themes.js` (switcher labels) |
| Favicon | `public/favicon.png` |

## How to add a new edition

1. Put the PDF in `public/assets/editions/`. Example: `pratibimb-5.0.pdf`.
2. Optional: add a cover as `public/assets/editions/pratibimb-5.0-cover.webp`.
3. Open `src/data/editions.js`.
4. Copy an existing object in the `editions` array.
5. Fill in `title`, `version`, `year`, `description`, `pdf`, and `cover`.
6. Set `pdfAvailable: true` only when the PDF file is actually there.
7. Set `status: "current"` on the latest issue. Set older issues to `"archive"`.

If `cover` is empty, the site draws an edition plate from the title and logo. If `pdfAvailable` is false, Read and Download buttons are not shown.

### Current issue PDF (drop folder)

The current issue is still in progress. When the file is ready, do not edit React code.

1. Open `public/assets/editions/pratibimb/`.
2. Paste the magazine as `pratibimb.pdf`.
3. Optional cover in the same folder: `cover.webp` (or `cover.jpg`).
4. Refresh the website.

The home page, archive, and reader look for that file automatically. Read and Download appear once the PDF is there.

### Pratibimb 3.0

The provided file `Pratibimb 3.0.pdf` belongs at:

`public/assets/editions/pratibimb-3.0.pdf`

The cover used on the site is `public/assets/editions/pratibimb-3.0-cover.webp` (page 1 of that issue).

## How to replace team photos

The site already points at these files. You only replace the file. You do not edit React components.

1. Go to `public/assets/team/`.
2. Replace the matching `.webp` with the new photograph.
3. Keep the filename exactly the same.
4. Refresh the website. If the old image remains, do a hard refresh (Ctrl+Shift+R).

```text
faizaan.webp          -> Faizaan Alam
pakhi.webp            -> Pakhi
abhipshita.webp       -> Abhipshita
devansh.webp          -> Devansh Kumar
monika-bhutani.webp   -> Monika Bhutani
```

Until a real photograph is dropped in, each file is an editorial placeholder that says PHOTO PLACEHOLDER. It is not a portrait.

To change a name, role, or short description, edit `src/data/team.js`. Leave `description` empty if you do not have copy.

Monika Bhutani's role is set to Branch Counsellor, as printed in Pratibimb 3.0. Change that string in `src/data/team.js` if the 4.0 masthead uses another title.

## How to replace other assets

Same rule: replace the file, keep the name.

```text
public/assets/logo/pratibimb-logo.webp
public/assets/editions/pratibimb/pratibimb.pdf
public/assets/editions/pratibimb/cover.webp
public/assets/editions/pratibimb-3.0.pdf
public/assets/editions/pratibimb-3.0-cover.webp
```

## Themes

The theme switcher is in the navigation. Four DaisyUI themes ship with the site:

- **Night** (`nightfall`): default, dark cover tones
- **Day** (`lumen`): light paper, violet type
- **Folio** (`folio`): warm print tones
- **Contrast** (`contrast`): high-contrast reading

The chosen theme is stored in `localStorage` under `pratibimb-theme`.

To add a theme:

1. Define it in `tailwind.config.js` under `daisyui.themes`.
2. Add a matching `{ id, label, description }` object in `src/data/themes.js`.

## Folder map

```text
public/assets/
  logo/pratibimb-logo.webp
  editions/pratibimb-3.0.pdf
  editions/pratibimb-3.0-cover.webp
  team/faizaan.webp
  team/pakhi.webp
  team/abhipshita.webp
  team/devansh.webp
  team/monika-bhutani.webp
  images/

src/data/         All editable copy and metadata
src/components/   Reusable UI
src/pages/        Routes
```

## Reading editions

`/edition/pratibimb-3.0` embeds the PDF and also offers Open in a new tab and Download.

## Notes for editors

- Do not invent biographies, social links, awards, or article titles. Leave fields empty if you do not have the fact.
- The Explore page lists sections that appear in Pratibimb 3.0. It is a map of the printed magazine, not a CMS of extracted articles.
- The original 3.0 PDF is large (about 226 MB) and is not committed to GitHub. The copy in `public/assets/editions/pratibimb-3.0.pdf` is a web-sized version of the same 117 pages. Keep the original on your machine if you need a print-quality file.
