# Issue Execution Plan

Issue: [#3 — Repository cleanup: dead files, unused assets, leftover config](https://github.com/Lakhwinderr/Portfolio/issues/3)

This plan is **how** to execute the issue. Do not start deletions until Phase 2 [verification](../glossary.md#verification) is written down in `notes.md`.

Terms: [glossary](../glossary.md)

---

## Goal

Remove [dead code](../glossary.md#dead-code), [unused assets](../glossary.md#unused-asset), [leftover configuration](../glossary.md#leftover-configuration), [unused imports](../glossary.md#unused-import), and [commented-out](../glossary.md#commented-out-code) experiments so the tree matches what the running app actually uses.

Constraints:

- Verify every audit candidate before deleting.
- Keep or document [Firebase](../glossary.md#firebase) — do not leave an unexplained leftover.
- App must still [build](../glossary.md#build); existing pages must still render.
- **No [drive-by refactors](../glossary.md#drive-by-refactor)** (no moving [context](../glossary.md#context), renaming routes, rewriting [components](../glossary.md#component), or “while I’m here” cleanups).

Success looks like a [small](../glossary.md#small-diff), reviewable [diff](../glossary.md#git-diff) of deletions and unused-import cleanup only.

---

## Investigation Checklist

Before deleting **any** file, import, CSS rule, or comment block, answer all of the following.

### Is it imported anywhere?

Search the whole repo (not only `src/components`):

- Filename (with and without extension)
- Default and [named](../glossary.md#named-import) export identifiers
- CSS class names if considering unused CSS
- Image filenames (`project3`, `dproject3`, spaces and case variants)

A file that nothing imports from `src/index.js` downward is a **candidate**, not yet proven unused. Walk the [import graph](../glossary.md#import-graph).

### Is it referenced dynamically?

[Static import](../glossary.md#static-import) / `require` is not the only path. Check for:

- String concatenations or template paths (`require(\`./${name}.jpg\`)`)
- [public folder](../glossary.md#public-folder) URLs (for example `logo192.png`, favicon, [manifest](../glossary.md#manifest) icons)
- [Create React App](../glossary.md#create-react-app) / [webpack](../glossary.md#webpack) asset [modules](../glossary.md#module) that are imported only inside **commented** data (still in the [bundle](../glossary.md#bundle) if the `import` line is live)
- [Configuration](../glossary.md#configuration) files consumed by tools, not by [React](../glossary.md#react) (`firebase.json`, `.firebaserc`, [`package.json`](../glossary.md#packagejson) scripts)

If unsure, treat it as referenced until proven otherwise.

### Is it actually unused?

“Not imported” is necessary but not sufficient.

- CSS: the file may be imported while **selectors** are unused (e.g. `.bar`, `.secondBar`, `.text`, `.numbertext`). Confirm no JSX uses those classes.
- [Duplicate CSS](../glossary.md#duplicate-css): `.barTop` in `App.css` vs `Header.css` — deleting one is safe only if the other still applies to the same elements.
- Images imported in `ProjectContainer.js` but only used in **commented** Snake Game data: the `import` line may still pull the file into the build. Removing the unused import **and** the unused files is one unit of work.
- `public/` CRA logos: unused by `src/` may still be listed in `manifest.json` / `index.html`. This issue’s audit list is `src` leftovers first; do not expand into a [PWA](../glossary.md#pwa) rewrite unless the issue explicitly includes those files.

### Is it configuration or application code?

| Kind | Examples | Rule |
| --- | --- | --- |
| Application code | `WorkDesign.js`, unused JS imports, commented JSX | Delete if unused and verified |
| [Assets](../glossary.md#asset) | `project3.jpg`, `dproject3.jpg` | Delete if no live import/reference |
| Tooling / hosting config | `.firebaserc`, `firebase.json` | **Decide:** delete **or** document why they stay (README or a short `docs/` note). Do not leave them unexplained. |
| CRA [scaffolding](../glossary.md#boilerplate) | `App.test.js`, `reportWebVitals.js` | **Out of [scope](../glossary.md#scope) unless listed.** Default tests/vitals are not on Issue #3’s delete list. Do not “clean CRA” in this issue. |

### Does deleting it change [runtime](../glossary.md#runtime) behaviour?

Expected answer for this issue: **no**.

If deleting a CSS rule would change layout/color, stop — that is not dead CSS. If removing an import would break a page, stop — it was not unused. If Firebase files are unused by the React app and there is no Firebase deploy, removing them should not change [GitHub Pages](../glossary.md#github-pages) runtime.

### Can it safely be restored with Git?

Yes, as long as files were committed before deletion. See [Rollback Plan](#rollback-plan) and [rollback](../glossary.md#rollback). Do not delete untracked-only files without copying them aside if you still need them.

Record answers in `notes.md` (the candidates table) before Phase 3.

---

## Execution Phases

### Phase 1 — Understand the current implementation

Do not delete anything.

1. Read the issue body and [acceptance criteria](../glossary.md#acceptance-criteria).
2. Read `docs/repository-audit.md` §2 (Dead or unused files) and §10 ([Technical debt](../glossary.md#technical-debt)).
3. Trace the live import graph from `src/index.js` → `App.js` → pages → [feature](../glossary.md#feature-folder) components.
4. Note how assets are loaded (static imports in `ProjectContainer.js` and elsewhere).
5. Note how hosting works today (GitHub Pages via `gh-pages`; Firebase files unused by the React app).

Output: a short “how the app is wired” paragraph in `notes.md`.

### Phase 2 — Verify every candidate from the [repository audit](../glossary.md#repository-audit)

Do not delete anything.

Walk this list one row at a time. Search, then fill `notes.md`.

| Candidate | What to verify |
| --- | --- |
| `src/components/WorkDesign/WorkDesign.js` | No imports of `WorkDesign`. File is invalid (`updateProject` duplicate) — extra reason to remove, not a reason to skip search. [Build hazard](../glossary.md#build-hazard). |
| `src/assets/project3.jpg`, `dproject3.jpg` | Imports in `ProjectContainer.js`; only referenced in commented Snake Game data. Confirm no other files use them. |
| Firebase `.firebaserc`, `firebase.json` | No `functions/` directory; React app does not call Firebase. Decide: **remove** or **document as intentional**. |
| Unused JS imports | `Work.js` (ToggleButton, Card, SlideShow); `Card.js` (SlideShow, Link); `ContactForm.js` (`useEffect`, `useReducer`). Confirm unused, then they are Phase 3. |
| Unused / duplicate CSS | `App.css` `.barTop` vs `Header.css`; `Work.css` `.bar` / `.secondBar`; `SlideShow.css` `.text` / `.numbertext`. Confirm no className usage. |
| Commented `BackGround` in `Home.js` | Comment only; component already gone. Safe to remove the comment. |
| Commented Snake Game data | Tied to unused images; remove comments **and** unused imports/files together so the app behaviour stays the same (Snake Game is already not shown). |

If a search finds a live reference, **keep it** and write why in `notes.md`. Do not delete from the audit list blindly. This is [safe deletion](../glossary.md#safe-deletion).

### Phase 3 — Remove dead code

Only after Phase 2 is filled in.

Order of operations (smallest [blast radius](../glossary.md#blast-radius) first):

1. Remove unused **imports** and **commented blocks** in files that stay.
2. Delete unused **component** `WorkDesign.js` (and empty folder if nothing remains).
3. Delete unused **image files** once their imports are gone.
4. Remove unused **CSS rules** (or an entire leftover file only if the file’s remaining content is also unused — `App.css` may still be imported; do not delete the file if it still has a reason to exist, or if removing the last rule + import is the verified unused path).
5. Firebase: execute the decision from Phase 2 (delete both files, **or** add a brief documented reason and leave them).

Do **not** in this phase ([scope creep](../glossary.md#scope-creep) / drive-by [refactoring](../glossary.md#refactoring)):

- Move `ProjectContext` out of `Card.js`
- Rename assets or convert to kebab-case
- Extract `src/data/`
- Fix Header effects, routing, [EmailJS](../glossary.md#emailjs), or tests
- Rewrite README (unless the Firebase keep-decision requires one sentence of documentation)

### Phase 4 — Verify imports

1. Search again for names of deleted files and removed symbols.
2. Confirm no remaining `import` points at a missing path.
3. Confirm no `className` points at a CSS class you deleted **if** that class was still used.
4. Skim remaining edited files for leftover blank import lines or broken commented code.

If anything still references a deleted path, restore from Git and re-evaluate (do not “fix” by rewriting the feature).

### Phase 5 — Run the application

From the project root:

```bash
npm install
npm start
```

Click through every route in [Verification Checklist](#verification-checklist). Watch the terminal and the browser console. Stop and roll back if a page fails to compile or an asset 404s.

### Phase 6 — Run the [production build](../glossary.md#production-build)

```bash
npm run build
```

The production bundle is the real check that webpack can resolve every remaining import. A successful `npm start` is not enough if a path only breaks in the production build.

Do not treat a failing **existing** `npm test` (“learn react”) as part of this issue unless you accidentally broke the test file. Do not “fix” `App.test.js` here.

### Phase 7 — Review the Git diff

```bash
git status
git diff
```

The diff should be:

- Deletions of unused files
- Removal of unused imports / comments / dead CSS
- Optional: a short documentation note **only** if Firebase is kept

Reject the diff if it includes refactors, formatting-only churn in unrelated files, or behaviour changes. Prefer [incremental refactoring](../glossary.md#incremental-refactoring) in later issues, not here.

### Phase 8 — Prepare [commit](../glossary.md#commit)

Do not commit until the user asks (or you are explicitly told to commit).

When committing:

- [Stage](../glossary.md#staging) only cleanup files.
- Message should explain **why** (dead code identified in audit / Issue #3), not a file laundry list.
- One focused commit is enough unless Firebase documentation is a separate concern.

---

## Verification Checklist

Run after Phase 3–4. Tick in `notes.md` or `retrospective.md` as you go.

### Tooling

- [ ] `npm install` completes without new errors
- [ ] `npm start` compiles and serves the app
- [ ] `npm run build` succeeds
- [ ] No new module-not-found / failed-to-compile errors

### Pages (manual)

- [ ] Home (`/Portfolio` or local equivalent) — hero, work gallery, toggle Development/Design
- [ ] About
- [ ] Education
- [ ] Contact (form still renders; no need to send a real email for this issue)
- [ ] Project / Work slideshow: open at least one Development and one Design card

### Runtime quality

- [ ] Browser console: no new errors (failed imports, missing chunks, broken image URLs)
- [ ] No broken assets (gallery thumbnails and slideshow images still load)
- [ ] No broken imports (every remaining `import` resolves)
- [ ] Design vs Development toggle still switches the gallery (WorkDesign was unused; live toggle must still work via existing `Work` / `ProjectContainer` / `ToggleButton`)

### Scope

- [ ] Diff contains cleanup only — no [architecture](../glossary.md#architecture) or [feature work](../glossary.md#feature-work) edits

---

## Rollback Plan

Deleted files that were already in Git are recoverable. Nothing in this issue should be force-pushed or rewritten with a hard reset unless the user explicitly asks.

### If `npm start` or `npm run build` fails after deletion

1. Note the missing module path from the error.
2. Restore that path from [HEAD](../glossary.md#head) (last commit), e.g.:

   ```bash
   git checkout HEAD -- path/to/deleted-file
   ```

   On current Git: `git restore --source=HEAD -- path/to/deleted-file`

3. Restore related imports if you already removed them in the same [working tree](../glossary.md#working-tree).
4. Re-run search: the file was **not** unused. Record the miss in `notes.md`. [Legacy code](../glossary.md#legacy-code) is easy to misread; search again.

### If you have not committed yet

- `git status` / `git diff` show unstaged or staged deletions.
- Discard a single file: `git restore -- path/to/file`
- Discard all cleanup work in the working tree: `git restore -- .` (only if you intend to throw away **all** uncommitted changes)

### If you have committed locally but not pushed

- `git revert HEAD` creates a new commit that puts the files back (safest).
- Do not `git reset --hard` unless the user explicitly wants to drop the commit.

### If you already pushed

- Revert with a new commit / PR. Do not force-push [`main`](../glossary.md#main-branch).

### Why this is safe

Git still contains the blobs of deleted files in history. Cleanup is reversible as long as you do not `git clean -fd` untracked work you care about, and you do not rewrite published history. Prefer **restore one file** over wiping the whole working tree. See [`git rm`](../glossary.md#git-rm).

---

## Vocabulary for this Issue

Terms used in this plan. Definitions live in the [glossary](../glossary.md) (repository path `learning/glossary.md`). From this folder the relative href is `../glossary.md`.

- [Technical debt](../glossary.md#technical-debt)
- [Dead code](../glossary.md#dead-code)
- [Legacy code](../glossary.md#legacy-code)
- [Build hazard](../glossary.md#build-hazard)
- [Static import](../glossary.md#static-import)
- [Import graph](../glossary.md#import-graph)
- [Blast radius](../glossary.md#blast-radius)
- [Scope creep](../glossary.md#scope-creep)
- [Drive-by refactor](../glossary.md#drive-by-refactor)
- [Incremental refactoring](../glossary.md#incremental-refactoring)
- [Verification](../glossary.md#verification)
- [Acceptance criteria](../glossary.md#acceptance-criteria)
- [Rollback](../glossary.md#rollback)
- [Small diff](../glossary.md#small-diff)
- [Module](../glossary.md#module)
- [Dependency](../glossary.md#dependency)

---

## Definition of Done

Issue #3 is complete when all of the following are true:

- [ ] All verified dead files, unused assets, leftover config (or a documented keep-decision), unused imports, unused CSS, and commented-out blocks are removed
- [ ] No broken imports remain
- [ ] `npm run build` succeeds
- [ ] The application works correctly (Home, About, Education, Contact, project slideshows, Development/Design toggle)
- [ ] The Git diff contains only cleanup — no drive-by refactors
- [ ] `notes.md` is updated with searches, decisions, and verification results
- [ ] `retrospective.md` is completed after the work
- [ ] The [glossary](../glossary.md) is updated if new terms appeared during implementation
- [ ] The change is ready for commit (staged, message drafted; commit when asked)
