# Notes — Issue #3

Fill this in **while** you work. Capture searches, surprises, and decisions.

Definitions: [glossary](../glossary.md) · [Import graph](../glossary.md#import-graph) · [Safe deletion](../glossary.md#safe-deletion) · [Verification](../glossary.md#verification) · [Leftover configuration](../glossary.md#leftover-configuration)

## Date started

17 August 2026

## Import graph / what I searched

Live graph: `src/index.js` → `App.js` → pages (`Home`, `About`, `Education`, `Contact`, `Pages/Work`) → `Header` / `Hero` / `Work` / `Footer` / `ProjectContainer` / `Card` / `ToggleButton` / `SlideShow` / `ContactForm` / `AboutSection` / `EducationCard`.

`App.js` also imports `App.css`, `ScrollToTop`, and `ProjectProvider` from `Card.js`.

Searched the repo (code, not only `src/components`) for: `WorkDesign`, `project3`, `dproject3`, `firebase`, `BackGround`, `Snake`, `barTop`, `.bar`, `secondBar`, `numbertext`, `sg1`, `devProject3`, `dprojecta3`, `img5`–`img8`, `logo192`, unused imports (`ToggleButton`/`Card`/`SlideShow` in `Work.js`, `Link`/`SlideShow`/`useEffect` in `Card.js`, `useEffect`/`useReducer` in `ContactForm.js`).

No dynamic `require(\`...\`)` image paths. Hosting is GitHub Pages via `package.json` `homepage` / `predeploy` / `deploy`. No Firebase SDK in the React app. No `functions/` directory.

## Candidates I verified before deleting

| Item | Referenced? | Decision | Notes |
| --- | --- | --- | --- |
| `WorkDesign.js` | No (no imports) | **Delete** | [Dead code](../glossary.md#dead-code) / [build hazard](../glossary.md#build-hazard) (`updateProject` is both a prop and a `const`). Folder had only this file. |
| `project3.jpg` / `dproject3.jpg` | Import-only in `ProjectContainer.js` | **Delete** | `project3` only in commented Snake Game data. `dproject3` was imported and never referenced, even in comments. |
| `Dev/12.jpeg` (`sg1` / `devProject3`) | Only commented Snake Game `array` | **Delete** | Same unused experiment as `project3`; would remain a live [static import](../glossary.md#static-import) after comment removal. |
| `Design/images/*` (`dprojecta3` / img5–img8) | Defined, never passed to a card | **Delete** | Extra unused assets found during verification: Extreme Crop, Soft Crop Color/White, `images/Your Design.jpg`. Kept `Design/Your Design.jpg` (`img4`) — that one is live. |
| Firebase (`.firebaserc`, `firebase.json`) | Not used by React or GH Pages | **Delete** | Abandoned Cloud Functions config for `portfolio-e0c73`; `functions/` does not exist. Live site is GitHub Pages. |
| Unused imports (`Work.js`, `Card.js`, `ContactForm.js`) | Unused | **Delete imports** | `Work.js`: ToggleButton, Card, SlideShow (live toggle is in `ProjectContainer`). `Card.js`: SlideShow, Link, `useEffect`. `ContactForm.js`: `useEffect`, `useReducer`. Form/`useRef` unchanged. |
| `App.css` `.barTop` | **Used** | **Keep file and rule** | Audit claimed a duplicate in `Header.css`. Verification: `Header.js` uses `className="barTop"` but the rule exists **only** in `App.css`. Deleting it would remove the orange bar. |
| `Work.css` `.bar` / `.secondBar` | Only commented `Bar` JSX | **Delete rules** | Kept `.work` and `.workText`. Removed unused `@keyframes move` (only referenced by `.secondBar` hover). |
| Slideshow `.text` / `.numbertext` | No `className` in JSX | **Delete rules** | Kept `.dot`, `.prev`, `.next`, `.fade`, etc. Did not rewrite the carousel. |
| Commented `BackGround` in `Home.js` | Comment only | **Delete comment** | Component already gone from the tree. |
| CRA `logo192.png` / `logo512.png` / `favicon.ico` | `manifest.json` + `index.html` | **Keep** | Referenced from `public/`. Out of scope for a PWA/metadata rewrite. |
| `App.test.js`, `reportWebVitals.js` | Wired by CRA | **Keep** | Explicitly out of this issue’s delete list. |

## Decisions (keep vs delete)

- **Firebase:** remove both files. They are leftover configuration, not an intentional second host. GitHub Pages remains the deploy path. No README rewrite beyond this notes/retrospective record.
- **`.barTop` / `App.css`:** keep. Audit was wrong about `Header.css` duplication.
- **Do not** extract context, rename assets, change routing, contact form logic, or migrate off CRA.

## Commands I ran

- Repo-wide search for the candidates above
- Fresh `npm install` then `npm run build` — originally failed: `Cannot find module 'sass'`
- Added `sass` as a direct dependency (`^1.102.0`); lockfile updated for sass and its transitive packages only (reverted an unrelated TypeScript peer bump)
- Clean verification: remove `node_modules`, `npm install`, `npm run build` — **succeeded** (existing ESLint warnings only)
- `CI=true npm test -- --watchAll=false` — **failed** as expected: stock `App.test.js` (`useRoutes` without Router + “learn react”). Not fixed in this issue
- Runtime (`npm start` on port 3001): Home, About, Education, Contact, Development slideshow (Little Lemon), Design toggle + Paper Friends slideshow all rendered
- `git status` / `git diff` review

## What I expected vs what I found

- Expected `.barTop` to be duplicated in `Header.css` (audit). Found it only in `App.css`.
- Expected `dproject3` to appear in commented Snake Game data. It did not; the import was fully dead.
- Found additional unused slideshow assets (`Dev/12.jpeg`, `Design/images/*` + unused `dprojecta3`) while walking the Snake Game / unused-array graph.

## Questions / blockers

None. Runtime click-through completed on a local CRA server. Project cards are hover-only on desktop (pre-existing); verification clicked `.onHover` in the DOM.

## Links and snippets worth keeping

- Live hosting: `package.json` `homepage` + `gh-pages` scripts
- `.barTop` consumers: `src/components/Header/Header.js` (mobile + desktop)
