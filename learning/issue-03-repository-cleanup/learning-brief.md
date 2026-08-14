# Learning Brief — Issue #3

## Issue title

Repository cleanup: dead files, unused assets, leftover config

**GitHub:** [#3](https://github.com/Lakhwinderr/Portfolio/issues/3)  
**[Milestone](learning/glossary.md#milestone):** Milestone 1 — Repository Professionalism  
**Priority / size:** High / M  
**Audit refs:** `docs/repository-audit.md` §2 (Dead or unused files), §10 ([Technical debt](learning/glossary.md#technical-debt))

---

## Why this issue exists

This portfolio still contains leftovers from [Create React App](learning/glossary.md#create-react-app), an abandoned [Firebase](learning/glossary.md#firebase) hosting attempt, a broken unused [component](learning/glossary.md#component) (`WorkDesign.js`), unused images, [unused imports](learning/glossary.md#unused-import), and [commented-out](learning/glossary.md#commented-out-code) experiments (Snake Game, `BackGround`).

Dead files hide the real [architecture](learning/glossary.md#architecture). They make searches noisy, make every future change riskier, and can even be a **[build hazard](learning/glossary.md#build-hazard)** (an unused file with a syntax error can still fail if someone imports it later). Cleanup is a prerequisite for architecture work in Milestone 2.

This issue is **deletion and [verification](learning/glossary.md#verification) only**. No [drive-by refactors](learning/glossary.md#drive-by-refactor).

---

## React concepts to learn

- Distinguishing **used vs unused [modules](learning/glossary.md#module)** by following the **[import graph](learning/glossary.md#import-graph)** (what `App.js` and pages actually import).
- Why an unused file can still be a [build hazard](learning/glossary.md#build-hazard) (`WorkDesign.js`: `updateProject` is both a [prop](learning/glossary.md#prop) and a `const`).
- How **[commented-out](learning/glossary.md#commented-out-code) JSX and imports** still count as clutter (and sometimes still import [unused assets](learning/glossary.md#unused-asset)).
- How **[static `import`](learning/glossary.md#static-import) of images** in [Create React App](learning/glossary.md#create-react-app) pulls files into the [webpack](learning/glossary.md#webpack) graph even if they are only referenced in commented data.
- Unused [hooks](learning/glossary.md#hook) and [named imports](learning/glossary.md#named-import) (`useEffect`, `useReducer`, `Link`, child components) and why [ESLint](learning/glossary.md#eslint) / the compiler may or may not catch them.
- Unused CSS classes vs unused CSS **files** — a stylesheet can be imported while many of its selectors are [dead](learning/glossary.md#dead-code). See also [duplicate CSS](learning/glossary.md#duplicate-css).

---

## Software Engineering concepts to learn

- **[Technical debt](learning/glossary.md#technical-debt) vs [feature work](learning/glossary.md#feature-work):** cleanup reduces risk; it does not add user-facing features.
- **[Safe deletion](learning/glossary.md#safe-deletion):** search for references first, then delete, then verify the app still [builds](learning/glossary.md#build) and pages still render.
- **Keeping diffs [small](learning/glossary.md#small-diff) and reviewable:** this issue should not mix cleanup with moving [context](learning/glossary.md#context), renaming routes, or rewriting components.
- **Decide vs delete:** Firebase config is either removed **or** documented as intentional — [leftover configuration](learning/glossary.md#leftover-configuration) without a decision is worse than either choice.
- **[Scope](learning/glossary.md#scope) discipline:** “no [drive-by refactors](learning/glossary.md#drive-by-refactor)” is an [acceptance criterion](learning/glossary.md#acceptance-criteria), not a suggestion.
- Treating the [repository audit](learning/glossary.md#repository-audit) as a **checklist to verify**, not as a list to delete blindly.

---

## Git concepts to practice

- Searching the [working tree](learning/glossary.md#working-tree) for references (`rg` / IDE search) before [`git rm`](learning/glossary.md#git-rm).
- Using `git log` / [`git blame`](learning/glossary.md#git-blame) (optional) to understand *why* a leftover existed before removing it.
- [Staging](learning/glossary.md#staging) **related deletions together** (e.g. unused component + its folder) without mixing unrelated edits.
- Reading the [`git diff`](learning/glossary.md#git-diff) to confirm the change is only removals and unused-import cleanup.
- Writing a [commit](learning/glossary.md#commit) message that explains **why** files were removed, not just **what** was deleted.
- Avoiding “cleanup + [refactor](learning/glossary.md#refactoring)” in one commit so review stays easy.

---

## Expected learning outcomes

By the end of this [issue](learning/glossary.md#issue) you should be able to:

1. Trace what the running app actually imports, versus what merely exists on disk.
2. Remove [dead](learning/glossary.md#dead-code) components, [assets](learning/glossary.md#asset), config, unused imports, and commented blocks **without** changing behavior.
3. Make a keep-or-delete decision for leftover configuration ([Firebase](learning/glossary.md#firebase)) and record it.
4. Confirm `npm run build` still succeeds and existing pages still render.
5. Produce a small, reviewable Git diff that a reviewer can trust.

---

## Estimated completion time

**2–4 hours** (reading + verification + deletion + build check), matching issue size **M**.

Budget extra time if you walk the import graph by hand rather than deleting from the audit list blindly.

---

## Suggested reading topics before implementation

- The issue body and [acceptance criteria](learning/glossary.md#acceptance-criteria) for [#3](https://github.com/Lakhwinderr/Portfolio/issues/3)
- `docs/repository-audit.md` — §2 Dead or unused files; §10 Technical Debt
- How JavaScript/React **[ES module](learning/glossary.md#es-module) imports** work (a file is unused if nothing reachable from `src/index.js` imports it)
- [Create React App](learning/glossary.md#create-react-app) / [webpack](learning/glossary.md#webpack): **imported images** vs files that only sit in `src/assets` or the [`public/` folder](learning/glossary.md#public-folder)
- [ESLint](learning/glossary.md#eslint) `no-unused-vars` and why unused CSS is harder to detect automatically
- Git: [`git rm`](learning/glossary.md#git-rm), reading diffs, small focused commits
- [Firebase](learning/glossary.md#firebase) Hosting vs [GitHub Pages](learning/glossary.md#github-pages) — enough to decide whether `.firebaserc` / `firebase.json` should stay

See the [glossary](learning/glossary.md) for these and other terms.
