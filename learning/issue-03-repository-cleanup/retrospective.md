# Retrospective — Issue #3

Fill this in **after** the work is done (and the PR is up, if you opened one).

Definitions: [glossary](../glossary.md) · [Acceptance criteria](../glossary.md#acceptance-criteria) · [Verification](../glossary.md#verification) · [Drive-by refactor](../glossary.md#drive-by-refactor)

## What went well

Walking the import graph from `index.js` caught extra unused assets the audit did not list (`Dev/12.jpeg`, unused `Design/images` files). Deletions stayed in the same files already being cleaned.

## What was harder than expected

The audit’s CSS claims needed a second source of truth. `.barTop` looked like an easy delete until `Header.js` + `Header.css` were checked side by side.

## Mistakes or near-misses

Almost treating `App.css` as fully dead because it only contains `.barTop`. That class is live. [Safe deletion](../glossary.md#safe-deletion) stopped a visual regression.

Also distinguished `Design/Your Design.jpg` (live Chat App gallery) from `Design/images/Your Design.jpg` (unused).

## What I learned (React)

An unused file can still be a [build hazard](../glossary.md#build-hazard). `WorkDesign.js` was never imported, but `updateProject` as both a prop and a `const` would fail if someone wired it up later.

Live [static imports](../glossary.md#static-import) of images still enter the webpack graph even when the only consumer is commented JSX.

## What I learned (software engineering)

Treat an audit as a checklist to verify, not a delete script. Leftover Firebase config needed an explicit remove-or-document decision; we removed it because GitHub Pages is the real host.

## What I learned (Git)

The useful [git diff](../glossary.md#git-diff) for this issue is deletions plus unused-import/CSS cleanup. No commit yet — review first.

## Would I do anything differently next time?

Search for unused *arrays* (`dprojecta3`, `devProject3`) immediately after finding commented project data, not only the filenames named in the audit.

## Acceptance criteria check

- [x] Unused [components](../glossary.md#component) and invalid `WorkDesign.js` are gone
- [x] [Unused assets](../glossary.md#unused-asset) are removed from `src/assets` (or clearly kept with a comment in data files)
- [x] [Firebase](../glossary.md#firebase) config is removed **or** documented as intentional
- [x] [Unused](../glossary.md#unused-import) JS imports and [commented-out](../glossary.md#commented-out-code) blocks are gone
- [x] App still [builds](../glossary.md#build) and the existing pages render *(clean `npm install` + `npm run build` succeeded with `sass` declared. Home / About / Education / Contact / both slideshows verified locally.)*
- [x] No [drive-by refactors](../glossary.md#drive-by-refactor) beyond cleanup in this issue

## Follow-ups (out of scope for this issue)

- CRA `public/` logos / manifest / `App.test.js` / `reportWebVitals` (later presentation / test issues)
- Header commented `// import { useState }` leftover (tiny; left to avoid an extra-file drive-by)
- `ToggleButton.js` unused `useState` import (pre-existing ESLint warning; file otherwise untouched)
- Add `sass` as a direct dependency so a fresh `npm install && npm run build` works without a local extra install — **done** (`sass` ^1.102.0 in `package.json`)
- Architecture: move `ProjectProvider` out of `Card.js`, `basename`, README
