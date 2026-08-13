# Repository Audit

**Repository:** [Lakhwinderr/Portfolio](https://github.com/Lakhwinderr/Portfolio)  
**Live site (GitHub Pages):** https://lakhwinderr.github.io/Portfolio/  
**Audit date:** 13 August 2026  
**Scope:** Read-only review of the current `main` branch. No application code was changed.

---

## 1. Project Overview

### Purpose of the repository

This is a personal portfolio for Lakhwinder Singh, a self-taught software developer and designer. The site presents:

- A home page with an animated hero and a work gallery (Development / Design)
- Project detail via a slideshow of screenshots and optional live links
- An education / certifications page
- An about page (introduction, skills, achievements)
- A contact form intended to send messages via EmailJS

### Current technology stack

| Layer | Choice | Notes |
| --- | --- | --- |
| UI | React 18.2 | Create React App (`react-scripts` 5.0.1) |
| Routing | `react-router-dom` 6.11 + `react-router-hash-link` | `BrowserRouter` with hardcoded `/Portfolio` prefix |
| Forms | Formik 2.4 | Custom validation, not Yup |
| Email | `@emailjs/browser` 3.11 | Service / template / public key hardcoded in source |
| Styles | Per-component CSS + one SCSS file | `HelloWorld.scss` uses BEM and Google Fonts (Lato) |
| Tests | React Testing Library + Jest (CRA defaults) | Only the stock CRA test remains |
| Deploy tooling | `gh-pages` 5.0 (devDependency) | `predeploy` / `deploy` scripts in `package.json` |
| Abandoned hosting | Firebase config | `.firebaserc` + `firebase.json`; no `functions/` folder |

JavaScript (not TypeScript). No state library, CSS-in-JS, or design system.

### Deployment method

GitHub Pages is enabled (`has_pages: true`, HTTPS enforced). Pages is served from the **`gh-pages` branch** at `/` (legacy Pages build). The CRA `homepage` field is `https://lakhwinderr.github.io/Portfolio`.

There is **no** GitHub Actions workflow. Deploy is a local `npm run deploy` (`predeploy` → `build` → `gh-pages -d build`). Last git push on this repo was **16 February 2024**.

Firebase files suggest an earlier or parallel hosting attempt that was never completed (no `functions` directory; `firebase.json` only declares Cloud Functions).

### Project maturity

**Early / student-portfolio maturity (v0.1.0).** Created 29 May 2023. Feature set is complete enough to browse, but the repo still carries CRA boilerplate, unused files, hardcoded secrets/IDs, a failing default test, and almost no project-specific documentation. Suitable as a recovery / professionalization project rather than a finished product.

---

## 2. Repository Structure

### Folder organization

```
Portfolio/
├── public/                 # CRA shell (favicon, logos, index.html, manifest)
├── src/
│   ├── assets/             # Mixed naming: SVGs, JPGs, Design/, Dev/
│   ├── components/
│   │   ├── Pages/          # Route-level screens
│   │   └── [Feature]/      # Feature folders with JS + CSS
│   ├── App.js / App.css
│   ├── index.js / index.css
│   └── CRA leftovers (App.test.js, reportWebVitals.js, setupTests.js)
├── firebase.json, .firebaserc
├── package.json, package-lock.json
└── README.md               # Unmodified CRA README
```

There is no `docs/` (until this audit), `.github/`, `LICENSE`, or `src/data/` layer. Pages live under `components/Pages/` rather than `src/pages/`, which is workable but mixes routing screens with UI widgets.

### File organization

Most UI is grouped as `ComponentName/ComponentName.js` + `ComponentName.css`. That pattern is consistent and easy to navigate.

Exceptions and problems:

- **Context lives inside `Card.js`.** `ProjectContext` / `ProjectProvider` are exported from a presentational card. App-wide state does not belong there.
- **`WorkDesign/WorkDesign.js`** is an unused, broken leftover (see dead files).
- **`App.css`** only defines `.barTop`, which is also defined in `Header.css`.
- Assets mix numbered files (`1.svg`, `2.svg`, `Dev/1.jpeg`) with spaced names (`Blog Page.jpg`, `Soft Crop - White-1.jpg`).

### Naming consistency

| Pattern | Observation |
| --- | --- |
| Components | PascalCase folders and files — good |
| CSS classes | Mix of camelCase (`.aboutCard`) and BEM (`.content__container__list__item`) |
| Routes | `/Portfolio`, `/Portfolio/Education`, etc. — prefixed for GH Pages, not using `basename` |
| Assets | `1.svg` / `2.svg` for LinkedIn/GitHub; `dproject1.jpg` vs `project1.jpg`; JPEG vs JPG vs jpeg |
| Anonymous export | `Work.js` uses `export default function ()` (unnamed) |

### Dead or unused files

| Item | Status |
| --- | --- |
| `src/components/WorkDesign/WorkDesign.js` | Not imported. Also invalid: `updateProject` is both a prop and a `const`. |
| `src/assets/project3.jpg`, `dproject3.jpg` | Imported in `ProjectContainer.js` but only referenced in commented-out Snake Game data |
| Firebase `functions` source | Declared in `firebase.json`, directory does not exist |
| CRA `logo192.png` / `logo512.png` / default `favicon.ico` | Still React/CRA branding |
| Commented `BackGround` import in `Home.js` | Component was deleted in git history; comment remains |
| Unused JS imports | `Work.js`: ToggleButton, Card, SlideShow; `Card.js`: SlideShow, Link; `ContactForm.js`: `useEffect`, `useReducer` |
| `App.css` `.barTop` | Duplicate of header styles |
| `Work.css` `.bar` / `.secondBar` | Styles for a commented-out `Bar` component |
| `SlideShow.css` unused classes | `.text`, `.numbertext` (typical W3Schools slideshow leftovers) |

### Opportunities for cleanup

1. Delete unused components, commented blocks, and unused image imports.
2. Move project/education data out of components into `src/data/`.
3. Move context to `src/context/` (or similar).
4. Remove Firebase config or restore a real Firebase app — do not leave a dangling `functions` codebase.
5. Rename assets to kebab-case without spaces (`homepage.jpg`, not `Homepage.jpg`).
6. Separate pages from `components/` (`src/pages/` vs `src/components/`).
7. Drop unused CRA PWA comments / default logos unless a real PWA is intended.

---

## 3. Documentation

### README quality

**Poor for a public portfolio.** `README.md` is still the stock Create React App “Getting Started” document. It describes `npm start`, `npm test`, `npm run build`, and `eject`. It does not mention:

- Who the site is for
- What pages exist
- How to deploy to GitHub Pages
- EmailJS setup
- The `/Portfolio` base path
- Screenshots or a live URL

### Installation instructions

CRA scripts are documented, which is enough to run locally **if** Node/npm versions are assumed. Missing: Node version, `npm install`, `npm run deploy`, and environment variables for EmailJS.

### Project description

None in the README, none on the GitHub repo (`description: null`), none in `public/index.html` (still “Web site created using create-react-app”).

### Contribution information

No `CONTRIBUTING.md`, no Code of Conduct, no license. For a personal portfolio that is acceptable, but a short “this is a personal site; PRs welcome for bugs” note would still help GitHub Recovery / recruiters.

### Missing documentation

- Architecture (routing, context, data model)
- Content update guide (how to add a project)
- Accessibility / design notes
- Security notes for EmailJS keys
- Changelog or tagged releases
- This audit is the first `docs/` artifact

---

## 4. GitHub Presentation

Evaluated against the GitHub API and repo settings (13 August 2026).

| Item | Current state | Assessment |
| --- | --- | --- |
| **Description** | `null` | Empty. Should state that this is Lakhwinder Singh’s React portfolio. |
| **Topics** | `[]` | None. Useful topics: `portfolio`, `react`, `javascript`, `github-pages`, `frontend`. |
| **Homepage URL** | `null` on GitHub (CRA `package.json` has the Pages URL) | GitHub “About” website field is unused. |
| **Social preview** | Falls back to the owner avatar | No custom Open Graph image. |
| **Screenshots** | None in README | Recruiters cannot scan the UI from the repo page. |
| **Demo links** | Not in README; Pages URL exists | Live demo: https://lakhwinderr.github.io/Portfolio/ |
| **License** | None | Fine for a personal site; optional. |
| **Issues / Discussions** | Issues on, 0 open; Discussions off | Unused. |
| **Wiki / Projects** | Wiki off; Projects on | Unused. |
| **Activity** | Last push Feb 2024 | Looks dormant next to a 2026 recovery effort. |
| **Default title / meta** | `React App` | Tab title and PWA name are still CRA sample copy. |

### Repository professionalism

The **code history shows a real portfolio being built**, but the **GitHub storefront still looks like an untouched CRA scaffold**. Description, topics, README, social preview, and HTML metadata are the highest-leverage presentation fixes and do not require a redesign.

Note: the GitHub profile lists https://lakhwinder.netlify.app/ as the personal site. This repo deploys to GitHub Pages. Clarify which URL is canonical so the recovery work is not split across two hosts.

---

## 5. Code Quality

### Component organization

The feature-folder pattern is a strength. Weak spots:

- **Layout duplication:** `Header` + `Footer` are repeated in Home, About, Education, and Contact. The Work (slideshow) page has **neither**, so the project detail view feels like a different app.
- **`Work` vs `Pages/Work`:** Two different components share the name “Work” (gallery section vs slideshow route). Confusing.
- **Provider wrapping:** `ProjectProvider` wraps the whole app from `App.js` but is defined in `Card.js`.
- **No shared layout route** (`<Outlet />`) despite React Router v6.

### Reusability

- `EducationCard` and `AboutSection` card CSS are near-duplicates (shadow, radius, hover scale, breakpoints). A shared `Card`/`Panel` style would reduce drift.
- Project cards are reasonably reusable (`Card` + `item` shape).
- Data is inlined in `Education.js` and `ProjectContainer.js`, so adding a project requires editing a large component.

### Maintainability

- Magic route prefix `/Portfolio` is copied in `App.js`, Header, Footer, Card, SlideShow. A single `basename` on the router would be the maintainable approach.
- Header `useEffect` **has no dependency array**. It re-attaches a click listener on every render. The same `ref` is also attached to both `<ul>` and the Home `<Link>`. Combined with the burger’s own `onClick`, mobile menu toggling is fragile (double-toggle risk).
- `SlideShow` assumes `item.array` exists. Visiting `/Portfolio/Work` without first clicking a card will throw (`Cannot read properties of undefined`).
- `WorkDesign.js` would not parse if imported (duplicate `updateProject`).
- Contact validation message says “Minimum 500 characters” when the check is `request.split(" ").length > 500` (word count, and the copy is inverted: it is a **maximum**).
- Submit handler `alert(JSON.stringify(values))` is debug leftover, not a user-facing success state.

### Naming conventions

Generally React-like. Issues: unnamed default export in `Work.js`; `class` instead of `className` in `HelloWorld.js` (copied HTML); `item` / `project.project` nested naming; social icons named `1.svg` and `2.svg`.

### Code duplication

- Desktop vs mobile Header CSS: hover colors and nav item rules are copy-pasted inside the media query.
- About vs Education card CSS.
- Footer nav vs Header nav (different interaction models: `navigate()` + `onClick` vs `<Link>`).
- Vendor-prefixed keyframes in `HelloWorld.scss` (`-webkit-`, `-o-`, `-moz-`) inflate a copied animation snippet.

### Potential refactoring

1. `BrowserRouter basename="/Portfolio"` (or HashRouter) and relative paths.
2. Shared `Layout` with header, footer, and `<Outlet />`.
3. Extract `ProjectProvider` from `Card`.
4. Extract `projects.js` / `education.js` data modules.
5. Rebuild `SlideShow` with a simple `current` index and `key`ed dots (current dot state stores JSX in state — an anti-pattern).
6. Convert burger and carousel controls to `<button>` elements.
7. Replace Formik+custom validate with a smaller form or fix validation copy and success UX.
8. Move EmailJS IDs to `REACT_APP_*` env vars.

---

## 6. UI / UX Review

### Hero section

A full-viewport area with a CSS-only rotating “Hello [world / lakhwinder / users / everybody]” line, copied from a common CodePen/Lato animation (`HelloWorld.scss`). It is visually distinctive but:

- Does not introduce who the person is, what they do, or a primary CTA
- Uses `class` not `className` (invalid in React; may still “work” in the DOM)
- No portrait, headline, or scroll affordance
- Animation does not respect `prefers-reduced-motion`

### About section

Three stacked white cards: Introduction, Skills, Achievements. Content is personal and useful. Issues: informal grammar, nested lists inside `<p>`, emoji in headings, no photo or timeline, hover `scale(1.02)` over 1s feels sluggish.

### Work / Projects section

Large “Work” heading, Development/Design toggle, image cards with overlay titles. Strengths: real projects with live URLs, screenshot galleries.

Gaps:

- Overlay is **always visible on small screens** and **hover-only from 500px up**, so keyboard/touch users on tablets may struggle
- Design projects often have no `link`
- Cards are a fixed `450px` wide, which overflows small phones unless the parent wraps (it does wrap, but 450px + margin is tight on 320–375px)
- Toggle is one click target for the whole control; it is not two distinct tabs
- Snake Game is commented out rather than removed or finished

### Contact section

Minimal form (name, email, optional phone, request). No heading, intro copy, or alternate contact (email/LinkedIn) on the page itself (socials are only in the footer). Submit shows a raw JSON `alert`, then fires EmailJS with only `console.log` on success/failure. Disabled button styling exists; no loading or thank-you state.

### Footer

Solid `#F29A16` bar with Home / About / Contact / Work and three social icons. Functional but:

- Not a `<footer>` landmark
- Home/About/Contact are clickable `<li>`s, not links (no URL, no keyboard)
- Work uses `HashLink`; others use `navigate()` — inconsistent
- Missing Education
- Social `alt=""` (decorative to AT, but then the links have no accessible name)

### Navigation

Split mobile (hamburger + stacked list) and desktop (centered row) implementations. Color-coded hover backgrounds (orange, pink, coral, yellow, teal) are playful but not a documented system.

Problems:

- `header { position: absolute }` overlays the first screen; inner pages rely on `margin-top: 100px` on content — easy to break
- `a { all: unset }` in `Header.css` is **global**, stripping default link styles and focus rings site-wide
- No active-route styling
- Burger is three `<div>`s, not a button; no `aria-expanded`
- Default `toggle` is `true`, and `.active { display: none }` — the naming is inverted (active means hidden)

### Mobile responsiveness

Breakpoints appear at ~500px, 768px, 1000px, 1100px. Header, about, education, and contact forms do adapt. Weakest areas: 450px project cards, hero text at 35px with overflow hidden (long names can clip), footer row may crowd on narrow screens (`width: 80%` + social icons).

### Visual consistency

Accent orange (`#F29A16` / `rgba(255, 166, 0, 0.616)` / `orangered` / `brown` on slideshow hover) is not tokenized. Inter is named in CSS but **never loaded**; Lato is loaded only for the hero. Body uses the system font stack from `index.css`. Result: mixed typography.

### Typography

- Hero: Lato 35px / 600
- Section titles: Inter 52px / 700 (falls back to system)
- Body in cards: 18px / 150% / `#5C5C5C`
- Nav mobile: 30px — large, which is good for tap targets

No type scale or heading hierarchy on Home (the Work title is a `div`, not an `h1`).

### Color palette

Informal palette: white backgrounds, black text, orange accent, gray body copy, rainbow nav hovers, brown slideshow buttons. Adequate for a student site; not yet a coherent brand. Footer orange + black text is likely readable; overlay white-on-`rgba(0,0,0,0.62)` should pass for large text.

### Spacing

Inconsistent: `100px` top margin on inner pages to clear the absolute header; `10px`/`20px`/`30px`/`40px` card margins; footer height fixed at `230px`. No spacing scale.

---

## 7. Accessibility

### Semantic HTML

| Area | Issue |
| --- | --- |
| Document | `lang="en"` is set — good |
| Title | `<title>React App</title>` — not descriptive |
| Hero | Generic `div`s; no `h1` for the person’s name or page purpose |
| Work heading | `div.workText`, not a heading |
| About | `<ul>` inside `<p>`; `<h3>` inside `<p>` — invalid nesting |
| Footer | `div.footer`; nav items are `<li onClick>` |
| Form | Inputs have `id` and placeholder but **no `<label>`** |
| Layout | No skip link; header is a real `<header>` — good |

### Keyboard navigation

- `a { all: unset }` removes focus outlines unless something else restores them.
- Burger, toggle, card overlay, carousel prev/next, and most footer items are **not buttons/links** (or not focusable).
- Slideshow “Go Back” is a HashLink (keyboard OK); arrows are `div`s with `onClick`.
- Card click is on `.onHover`, which is `display: none` until hover on desktop — **keyboard users cannot open a project** there.

### Image alt text

- Project cards: `alt="image"` (useless).
- Slideshow: `alt="project image"` (generic).
- Social icons: `alt=""` with no text on the parent `<a>` — **unnamed links**.

### Color contrast

Not instrumented in this audit (no automated axe run). Likely concerns:

- Placeholder-only inputs (placeholder vs label contrast)
- `color: grey` on orange circular arrow buttons
- Disabled submit `#a1a1a157` on white
- Nav hover tints on white may fail for text+background combinations

Orange `#F29A16` on white for footer text (black on orange) is probably fine.

### ARIA usage

Almost none. Missing: `aria-label` on icon links and carousel, `aria-expanded` / `aria-controls` on the menu, `aria-selected` on tabs, `role="alert"` or `aria-live` for form errors (errors are in extra `div`s, which is OK if they stay in the DOM after touch). `target="_blank"` links omit `rel="noopener noreferrer"` and have no “opens in new tab” indication.

HelloWorld animation is decorative but not marked `aria-hidden`; screen readers may hear four list items.

---

## 8. Performance

### Bundle size opportunities

- CRA + React Router + Formik + EmailJS is reasonable for a small site.
- **Images are the main cost.** Design screenshots are huge and imported as modules, so they enter the JS bundle (or webpack asset graph) rather than being optimized CDN files:

  | File | Size (approx.) |
  | --- | --- |
  | `Design/bookCover.JPG` | 3.0 MB |
  | `Design/Homepage.jpg` | 2.0 MB |
  | `Design/Your Design.jpg` | 1.7 MB |
  | `Design/Blog Page.jpg` | 1.6 MB |
  | `Design/Post Page.jpg` | 1.3 MB |
  | Other Design/Dev JPEGs | 100 KB–700 KB each |

  Repo size on GitHub is ~19.8 MB, consistent with unoptimized binaries.

- Testing libraries (`@testing-library/*`) are listed under **`dependencies`**, not `devDependencies`. They should not ship to production if tree-shaken incorrectly; they still bloat `npm install` and lockfile intent.
- `sass` is not a direct dependency; SCSS relies on a transitive `sass` from the lockfile. That is fragile.

### Image optimization

No compression, WebP/AVIF, srcset, or consistent max dimensions. Spaces in filenames complicate tooling. `dproject3.jpg` (~382 KB) and `project3.jpg` are unused at runtime.

### Lazy loading

- No `React.lazy` / `Suspense` for routes.
- No `loading="lazy"` on gallery images.
- `reportWebVitals` is wired but **never passed a callback**, so it does no measurement.
- SlideShow loads `item.array` as imported modules up front via `ProjectContainer` (all project images initialize with that module).

### React best practices

| Practice | Status |
| --- | --- |
| StrictMode | Yes |
| Keys on lists | Missing on `EducationCard` map, `ProjectContainer` card maps, SlideShow dots |
| JSX in state | SlideShow stores arrays of `<div className={...}>` in `useState` |
| Effects | Header effect missing deps; Work page `useEffect` depends on `project.project` |
| `class` vs `className` | HelloWorld uses `class` |
| Context default | Empty object until a card is clicked — no guard on slideshow |
| Production console | EmailJS success/error `console.log` |

---

## 9. Deployment

### GitHub Pages configuration

- Source: **`gh-pages` branch**, path `/`, HTTPS on, no custom domain.
- SPA caveat: `BrowserRouter` + nested paths (`/Portfolio/About`, etc.) **will 404 on refresh** unless a `404.html` → `index.html` trick is in the built branch. CRA + `gh-pages` does not add this by default. Hash routing or a Pages 404 fallback should be verified on the live site.
- Hardcoded `/Portfolio` matches project-site URLs; a user/org site (`username.github.io`) would break every link.

### Build configuration

- Standard `react-scripts build`.
- `homepage` in `package.json` is set correctly for a project Pages site.
- No `GENERATE_SOURCEMAP`, env files, or CI cache.
- `npm test` currently expects “learn react” text and **will fail** against the real app.

### Environment variables

`.gitignore` includes `.env` and CRA env variants, but **the app never reads `process.env`**. EmailJS `service_729iroo`, `template_tburxbh`, and public key `1iv3kJd6txueSQc94` are in `ContactForm.js`. Anyone can send mail through that EmailJS quota; the public key is expected for client-side EmailJS, but it should still live in env vars and be restricted in the EmailJS dashboard.

### External APIs

| Service | Use | Risk |
| --- | --- | --- |
| EmailJS | Contact form | Exposed IDs; no visible user feedback; quota abuse |
| Google Fonts | Lato via `@import` in SCSS | Extra render-blocking CSS from fonts.googleapis.com |
| Live project URLs | GitHub Pages, Webflow, WordPress | Fine; some may rot |

No analytics. Firebase project `portfolio-e0c73` is referenced but unused in the React app.

---

## 10. Technical Debt

### Placeholder code

- CRA README, title, meta description, manifest (`"Create React App Sample"`)
- `App.test.js` “learn react”
- `alert(JSON.stringify(values))` on submit
- `reportWebVitals()` with no reporter
- Commented “Inside Work”, “Creating the image gallery”, console.logs

### Copied code

- `HelloWorld.scss` is a widely copied “Hello World” CSS animation (comments about `6x + 6y = 100` remain).
- `SlideShow.css` comments and unused `.text` / `.numbertext` match the classic W3Schools slideshow tutorial.
- CRA `index.html` comment blocks left intact.

### Demo content

Project and education entries look like real personal work (Little Lemon, Coursera/META, IIT Roorkee), not lorem ipsum. The hero greeting list (“users !”, “everybody !”) is generic. Snake Game remains as commented demo.

### Legacy code

- Firebase functions scaffold without sources
- Deleted `BackGround` / `Design` components still mentioned in comments or git history
- `WorkDesign.js` leftover from an older design-tab experiment
- Absolute header + magic `margin-top: 100px` instead of normal document flow
- CRA is in maintenance mode; long-term recovery may want Vite

### Unused dependencies

- `@testing-library/*` and `web-vitals` are unused in any meaningful production path (`web-vitals` only if a callback is passed).
- `react-router-hash-link` is used (Work hash, Go Back).
- Formik is used only on one form — keep or replace, not unused.
- Transitive `sass` should be a direct dependency if SCSS stays.

---

## 11. Strengths

Preserve these while recovering the repo:

1. **Clear personal story** — education, skills, hackathon win, and real project links (not an empty template).
2. **Feature-folder components** — easy for a small React app to grow once dead files are removed.
3. **Working GitHub Pages pipeline** — `homepage`, `predeploy`/`deploy`, and a published `gh-pages` branch already exist.
4. **Responsive intent** — mobile vs desktop header, wrapping project grid, form/about breakpoints.
5. **Contact path** — Formik validation + EmailJS is the right shape; it needs polish, not a rewrite from zero.
6. **Accent color identity** — orange bar and hover language can become a real design token.
7. **Hash links to `#work`** — sensible single-page jump on Home.
8. **StrictMode + React 18** — not a class-component legacy app.
9. **Public, focused repo** — one product (the portfolio), not a monorepo dump.

---

## 12. Improvement Opportunities

### High Priority

1. **Replace the CRA README** with purpose, live URL, install, deploy, and how to add a project.
2. **GitHub About:** description, homepage URL, topics, and a social preview / README screenshot.
3. **HTML metadata:** title, description, favicon, manifest name — stop shipping “React App”.
4. **Fix routing robustness:** `basename`, 404 fallback or HashRouter, guard slideshow when `item` is empty, shared Layout.
5. **Accessibility baseline:** labels on inputs, real `<button>`/`<a>` for controls, icon link names, `h1`, remove global `a { all: unset }` or restore `:focus-visible`.
6. **Stop leaking EmailJS IDs in a casual way:** env vars + EmailJS domain/rate restrictions; replace `alert` with success/error UI.
7. **Image pipeline:** compress/resize design screenshots (multi-MB JPEGs should not be in the JS graph).
8. **Fix the Header effect and mobile menu** (deps, single ref, `aria-expanded`).

### Medium Priority

1. Extract data and context from UI components.
2. Delete `WorkDesign.js`, unused images/imports, Firebase leftovers (or document them).
3. Unify typography (load Inter or stop declaring it); tokenise colors and spacing.
4. Hero that states name, role, and CTA — keep the animation as optional flourish.
5. Work page: include header/footer; make cards keyboard-activable; named tabs.
6. Move testing libraries to `devDependencies`; replace or remove the bogus unit test.
7. Confirm GH Pages refresh behavior; add `404.html` if needed.
8. `rel="noopener noreferrer"` on `target="_blank"`; keys on all lists.
9. Add `sass` as a direct dependency if SCSS remains.

### Low Priority

1. Migrate from CRA to Vite when touching the toolchain anyway.
2. `React.lazy` for routes; `loading="lazy"` on images; WebP.
3. `prefers-reduced-motion` for hero and hover scales.
4. LICENSE, optional CONTRIBUTING, Open Graph tags.
5. GitHub Actions deploy instead of local `gh-pages`.
6. Content pass (grammar, skills dated to 2026, canonical live URL vs Netlify).
7. Remove unused CSS (`.bar`, `.secondBar`, slideshow tutorial classes).
8. PWA: either customize `manifest.json` or drop unused icons.

---

## Recommended implementation order

Work in thin vertical slices so the public GitHub face improves before deep refactors.

1. **Presentation (no app behavior change)**  
   README, GitHub description/topics/homepage, `index.html` title/meta, manifest, screenshot in README.

2. **Safety and correctness**  
   Slideshow empty-state, Header menu effect, list keys, EmailJS env + UX, delete dead files (`WorkDesign`, unused images, Firebase if unused).

3. **Routing and layout**  
   `basename`, shared Layout, consistent nav links (including footer), GH Pages 404 fallback.

4. **Accessibility and UX**  
   Semantic headings, labels, focus styles, keyboard cards/carousel/menu, named social links, contact success state.

5. **Visual system**  
   Font loading, color tokens, hero content, Work/About spacing, mobile card width.

6. **Performance**  
   Compress assets, lazy routes/images, drop unused CSS/JS, fix dependency classification.

7. **Toolchain (optional later)**  
   Vite migration, GitHub Actions deploy, real tests for Header/form/projects data.

This order matches a GitHub Recovery goal: the repository should look intentional on GitHub first, then become safe to use, then pleasant and fast.
)
