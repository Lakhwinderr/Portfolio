# Glossary

Living vocabulary for the GitHub Recovery project. Add a term whenever a new software engineering, React, Git, CSS, JavaScript, accessibility, performance, architecture, or GitHub idea shows up in an issue.

**How to add an entry:** keep alphabetical order. Use the same four headings. Link [Related terms](#acceptance-criteria) to other entries in this file. Prefer an example from this portfolio.

**Seeded from:** `docs/repository-audit.md`, `learning/issue-03-repository-cleanup/learning-brief.md`, [GitHub Issue #3](https://github.com/Lakhwinderr/Portfolio/issues/3).

---

## Index

- [Acceptance criteria](#acceptance-criteria)
- [Architecture](#architecture)
- [Asset](#asset)
- [basename](#basename)
- [BEM](#bem)
- [Boilerplate](#boilerplate)
- [Blast radius](#blast-radius)
- [Build](#build)
- [Build hazard](#build-hazard)
- [Bundle](#bundle)
- [Code hygiene](#code-hygiene)
- [Commented-out code](#commented-out-code)
- [Commit](#commit)
- [Component](#component)
- [Configuration](#configuration)
- [Context](#context)
- [Create React App](#create-react-app)
- [Dead code](#dead-code)
- [Dependency](#dependency)
- [devDependency](#devdependency)
- [Drive-by refactor](#drive-by-refactor)
- [Duplicate CSS](#duplicate-css)
- [EmailJS](#emailjs)
- [Environment variable](#environment-variable)
- [ESLint](#eslint)
- [ES module](#es-module)
- [Feature folder](#feature-folder)
- [Feature work](#feature-work)
- [Firebase](#firebase)
- [Git blame](#git-blame)
- [Git diff](#git-diff)
- [GitHub Pages](#github-pages)
- [git rm](#git-rm)
- [HEAD](#head)
- [Hook](#hook)
- [Import graph](#import-graph)
- [Incremental refactoring](#incremental-refactoring)
- [Issue](#issue)
- [Legacy code](#legacy-code)
- [Leftover configuration](#leftover-configuration)
- [Main branch](#main-branch)
- [Manifest](#manifest)
- [Milestone](#milestone)
- [Module](#module)
- [Named import](#named-import)
- [package.json](#packagejson)
- [Presentational component](#presentational-component)
- [Production build](#production-build)
- [Prop](#prop)
- [public folder](#public-folder)
- [PWA](#pwa)
- [React](#react)
- [React Router](#react-router)
- [Refactoring](#refactoring)
- [Regression](#regression)
- [Repository](#repository)
- [Repository audit](#repository-audit)
- [Rollback](#rollback)
- [Runtime](#runtime)
- [Safe deletion](#safe-deletion)
- [Scope](#scope)
- [Scope creep](#scope-creep)
- [SCSS](#scss)
- [Small diff](#small-diff)
- [SPA](#spa)
- [Staging](#staging)
- [Static import](#static-import)
- [Technical debt](#technical-debt)
- [Transitive dependency](#transitive-dependency)
- [Unused asset](#unused-asset)
- [Unused import](#unused-import)
- [Verification](#verification)
- [Webpack](#webpack)
- [Working tree](#working-tree)

---

# Acceptance criteria

## Definition

A checklist that says when the work is *done enough* to close the issue. If an item is unchecked, the issue is not finished, even if you wrote a lot of code.

## Why it matters

Without it, “done” is a feeling. With it, you and a reviewer can agree. It also protects you from [scope creep](#scope-creep): if a nice idea is not on the list, it belongs in a new [issue](#issue).

## Example

Issue #3 is done only when unused components (including `WorkDesign.js`) are gone, unused assets are removed or clearly kept, Firebase is removed or documented, unused imports and commented blocks are gone, the app still [builds](#build) and pages still render, and there are no [drive-by refactors](#drive-by-refactor).

## Related terms

[Issue](#issue) · [Verification](#verification) · [Scope](#scope) · [Scope creep](#scope-creep)

---

# Architecture

## Definition

How the pieces of the app are arranged on purpose: which folders mean what, where data lives, how pages talk to components, and how routing and [context](#context) are wired. Architecture is the map; individual files are the streets.

## Why it matters

A messy map makes every change slower. [Dead code](#dead-code) hides the real map. Issue #3 cleans the map *before* later milestones move [context](#context) out of `Card.js` or split `src/pages/` from `src/components/`.

## Example

Today, route screens live under `src/components/Pages/` and app-wide project state is defined inside `Card.js`. That is an architecture smell the audit recorded; it is **not** something Issue #3 should fix.

## Related terms

[Component](#component) · [Feature folder](#feature-folder) · [Context](#context) · [Incremental refactoring](#incremental-refactoring) · [Repository audit](#repository-audit)

---

# Asset

## Definition

A non-code file the UI needs: images, SVGs, fonts, favicons. In this app, most sit in `src/assets/` and some (favicon, default logos) sit in [`public/`](#public-folder).

## Why it matters

Huge or unused images bloat the [repository](#repository) and the [bundle](#bundle). Names with spaces (`Blog Page.jpg`) also make tooling harder. Cleanup starts by asking: does anything still load this file?

## Example

`project3.jpg` and `dproject3.jpg` are assets imported in `ProjectContainer.js` but only mentioned in commented Snake Game data. They are [unused assets](#unused-asset) for Issue #3.

## Related terms

[Unused asset](#unused-asset) · [Static import](#static-import) · [Bundle](#bundle) · [public folder](#public-folder)

---

# basename

## Definition

A React Router setting that tells the router “this app does not live at the domain root; it lives under a prefix.” For a project site on GitHub Pages, that prefix is often `/Portfolio`.

## Why it matters

If every `<Link>` hardcodes `/Portfolio/...` instead of using `basename`, one rename or a move to a custom domain means hunting strings across the app. The audit flagged this as a maintainability issue — later work, not Issue #3.

## Example

`App.js`, Header, Footer, Card, and SlideShow all repeat `/Portfolio`. A single `<BrowserRouter basename="/Portfolio">` would be the architectural fix later.

## Related terms

[React Router](#react-router) · [GitHub Pages](#github-pages) · [SPA](#spa) · [Architecture](#architecture)

---

# BEM

## Definition

A CSS naming style: **Block**, **Element**, **Modifier**. Names look like `.block__element--modifier` so you can guess what a class belongs to without reading the whole stylesheet.

## Why it matters

Mixed naming (camelCase in one file, BEM in another) makes the design harder to share and search. You do not have to convert the whole site in one issue; you should notice the mix.

## Example

`HelloWorld.scss` uses BEM-like names such as `.content__container__list__item`. About cards use camelCase like `.aboutCard`. Issue #3 does not unify this.

## Related terms

[SCSS](#scss) · [Duplicate CSS](#duplicate-css) · [Code hygiene](#code-hygiene)

---

# Boilerplate

## Definition

Starter files a tool generates for you that are not specific to *your* product. They are useful on day one and clutter later if you never replace them.

## Why it matters

Recruiters and future-you read the [repository](#repository) first. If the README still says “Getting Started with Create React App,” the project looks unfinished even when the site has real work on it.

## Example

Stock CRA `README.md`, `<title>React App</title>`, `App.test.js` expecting “learn react,” and default `logo192.png` / `logo512.png` are boilerplate. Issue #3 may touch unused logos only if they are on the delete list; rewriting the README is a different issue.

## Related terms

[Create React App](#create-react-app) · [Legacy code](#legacy-code) · [PWA](#pwa) · [Technical debt](#technical-debt)

---

# Blast radius

## Definition

How much of the app a change can break. A small blast radius means one file or one import. A large one means many pages, the build, or deploy.

## Why it matters

Cleanup should start with the smallest blast radius so a mistake is easy to spot and [roll back](#rollback). Mixing deletions with a rewrite makes the blast radius too big to debug.

## Example

Issue #3’s execution plan removes unused imports first, then unused components, then assets. Deleting `WorkDesign.js` after confirming it is not in the [import graph](#import-graph) has a small blast radius. Rewriting routing in the same change would not.

## Related terms

[Safe deletion](#safe-deletion) · [Small diff](#small-diff) · [Rollback](#rollback) · [Import graph](#import-graph) · [Drive-by refactor](#drive-by-refactor)

---

# Build

## Definition

The step that turns your source files into files a browser can load in production: minified JavaScript, CSS, and copied assets. In this repo that command is `npm run build` (Create React App / `react-scripts`).

## Why it matters

`npm start` is forgiving and aimed at developers. A [production build](#production-build) is stricter about missing [modules](#module) and is what GitHub Pages actually serves after deploy. Cleanup is not finished until the build succeeds.

## Example

Issue #3’s [acceptance criteria](#acceptance-criteria) require the app to still build after deletions. If you delete a file that something still [statically imports](#static-import), the build fails.

## Related terms

[Production build](#production-build) · [Bundle](#bundle) · [Webpack](#webpack) · [Create React App](#create-react-app) · [Verification](#verification)

---

# Build hazard

## Definition

Something that is not on the live screen *today* but can break the [build](#build) or crash the app the moment it gets imported or executed. Broken unused files are a trap for the next person.

## Why it matters

“It’s unused, so it can’t hurt” is false. A teammate (or you in six months) may import it because the name looks useful. Then the whole compile fails.

## Example

`WorkDesign.js` is not in the [import graph](#import-graph), but it declares `updateProject` both as a [prop](#prop) and as a `const`. Importing it would be a syntax/runtime failure. Issue #3 treats that as a reason to delete it after [verification](#verification), not to ignore it.

## Related terms

[Dead code](#dead-code) · [Import graph](#import-graph) · [Module](#module) · [Safe deletion](#safe-deletion)

---

# Bundle

## Definition

The packaged JavaScript (and often CSS and imported images) webpack produces. The browser downloads this instead of your original `src/` tree.

## Why it matters

Every [static import](#static-import) can grow the bundle. Multi-megabyte design screenshots imported as modules make the site slow. Unused images that are still imported still ride along.

## Example

The audit notes Design JPEGs of 1–3 MB imported through `ProjectContainer`. Even `project3.jpg` can enter the webpack graph if its `import` line is still live, whether or not Snake Game is shown.

## Related terms

[Webpack](#webpack) · [Static import](#static-import) · [Asset](#asset) · [Build](#build) · [Unused asset](#unused-asset)

---

# Code hygiene

## Definition

Keeping the tree honest: names match reality, unused things are gone, comments are not graveyards, and [configuration](#configuration) is either used or explained. Hygiene is boring and high leverage.

## Why it matters

Hygiene is not a redesign. It is what makes [incremental refactoring](#incremental-refactoring) possible. Dirty trees hide bugs and inflate [git diffs](#git-diff).

## Example

Removing unused imports in `Work.js`, `Card.js`, and `ContactForm.js`, plus the leftover `BackGround` comment in `Home.js`, is hygiene. Moving `ProjectProvider` to `src/context/` is architecture, not hygiene for Issue #3.

## Related terms

[Dead code](#dead-code) · [Unused import](#unused-import) · [Technical debt](#technical-debt) · [Drive-by refactor](#drive-by-refactor)

---

# Commented-out code

## Definition

Old code left in the file inside `/* */` or `//` “just in case.” Version control already stores history; comments are a poor backup.

## Why it matters

People skip comments when tracing the [import graph](#import-graph), then get surprised. Worse: a **live** `import` above a commented usage still pulls an [asset](#asset) into the [bundle](#bundle).

## Example

Snake Game project data is commented in `ProjectContainer.js` while `project3.jpg` / `dproject3.jpg` may still be imported. `Home.js` still comments a `BackGround` import for a [component](#component) that was already deleted in Git history.

## Related terms

[Dead code](#dead-code) · [Unused asset](#unused-asset) · [Static import](#static-import) · [Rollback](#rollback)

---

# Commit

## Definition

A saved snapshot in Git with a message. It is the unit you share, revert, and review. A good message says *why* the snapshot exists.

## Why it matters

Issue #3 should land as a focused commit (or a few related ones): “remove unused files found in the audit,” not a mix of cleanup plus a Header rewrite. Future [rollback](#rollback) is easier when each commit has one job.

## Example

After [verification](#verification), a commit that only deletes `WorkDesign.js`, unused images, leftover Firebase files (if that is the decision), and unused imports matches the issue. Do not wait to commit until you have also “fixed” routing.

## Related terms

[Git diff](#git-diff) · [Small diff](#small-diff) · [Staging](#staging) · [Rollback](#rollback) · [HEAD](#head)

---

# Component

## Definition

A React function (or class) that returns UI. You compose the app from components the way you compose a page from sections. Each usually has a name, [props](#prop), and often a CSS file.

## Why it matters

Cleanup is component-aware: delete a whole unused component folder, but do not “simplify” a used one in the same [issue](#issue). Knowing what is a page vs a widget helps you read the [architecture](#architecture).

## Example

`Header`, `Footer`, `Card`, and `SlideShow` are components. `WorkDesign` is a component file that is not used. Confusingly, `Work.js` (gallery) and `Pages/Work.js` (slideshow route) are two different components that share a name.

## Related terms

[Module](#module) · [Prop](#prop) · [Feature folder](#feature-folder) · [Presentational component](#presentational-component) · [Dead code](#dead-code)

---

# Configuration

## Definition

Files that tell *tools* how to behave (hosting, npm scripts, linters), as opposed to files that draw the UI. Config is not always imported by React.

## Why it matters

Searching `src/` will not prove Firebase unused. You must ask: does any deploy path or script read this file? Leftover config without a decision is [technical debt](#technical-debt).

## Example

`.firebaserc` and `firebase.json` are configuration. `package.json` `homepage` and `deploy` scripts are configuration for [GitHub Pages](#github-pages). Issue #3 requires Firebase to be deleted **or** documented, not ignored.

## Related terms

[Leftover configuration](#leftover-configuration) · [Firebase](#firebase) · [package.json](#packagejson) · [Create React App](#create-react-app)

---

# Context

## Definition

React’s way to share data with many components without passing [props](#prop) through every layer. A Provider wraps a tree; consumers read the value with `useContext`.

## Why it matters

Context is app-wide state. Parking it inside a UI widget makes the [architecture](#architecture) lie: “Card” sounds like a picture tile, but it also owns which project is selected.

## Example

`ProjectContext` / `ProjectProvider` live in `Card.js` and wrap the app from `App.js`. Issue #3 must not move them; a later issue will.

## Related terms

[Architecture](#architecture) · [Presentational component](#presentational-component) · [Component](#component) · [Incremental refactoring](#incremental-refactoring)

---

# Create React App

## Definition

An official-for-years starter that hides [webpack](#webpack), Babel, and Jest behind `react-scripts`. You run `npm start`, `npm test`, and `npm run build` without ejecting config. It is now in maintenance mode.

## Why it matters

This portfolio *is* a CRA app. Many leftovers (README, logos, `reportWebVitals`, default test) come from CRA, not from you. Cleanup should name that origin so you do not treat boilerplate as mysterious “legacy magic.”

## Example

`react-scripts` `5.0.1` in `package.json` is CRA. `src/index.js` rendering `<App />` with `StrictMode` is the CRA entry. Deploy uses CRA’s `build/` folder plus `gh-pages`.

## Related terms

[Webpack](#webpack) · [Boilerplate](#boilerplate) · [Build](#build) · [PWA](#pwa) · [package.json](#packagejson)

---

# Dead code

## Definition

Code, styles, or files that never run in the real product. They occupy the tree, confuse search, and can still be a [build hazard](#build-hazard).

## Why it matters

Every future change has to step around them. [Safe deletion](#safe-deletion) after tracing the [import graph](#import-graph) is cheaper than living with ghosts.

## Example

`WorkDesign.js` is dead (not imported). CSS classes `.text` and `.numbertext` in `SlideShow.css` are dead if no JSX uses them. Commented Snake Game data is dead *behavior* even if nearby imports are still live.

## Related terms

[Unused import](#unused-import) · [Unused asset](#unused-asset) · [Commented-out code](#commented-out-code) · [Build hazard](#build-hazard) · [Code hygiene](#code-hygiene)

---

# Dependency

## Definition

A package your project lists in `package.json` because the app (or tests) import it. `npm install` downloads it into `node_modules`.

## Why it matters

Wrong classification (test libraries in `dependencies` instead of [`devDependencies`](#devdependency)) muddies intent. Unused dependencies still cost install time. Do not remove a dependency in Issue #3 unless the issue says so — Formik and EmailJS are used.

## Example

`react`, `react-router-dom`, `formik`, and `@emailjs/browser` are runtime dependencies. `gh-pages` is already a [devDependency](#devdependency) used only to deploy.

## Related terms

[devDependency](#devdependency) · [Transitive dependency](#transitive-dependency) · [package.json](#packagejson) · [Module](#module)

---

# devDependency

## Definition

A package needed to *develop or deploy* the app, not to run it in a user’s browser. Examples: bundlers, test libraries, the `gh-pages` publisher.

## Why it matters

Listing test tools as production [dependencies](#dependency) is sloppy bookkeeping. Issue #3 does not reclassify `@testing-library/*`; the audit recorded it for later.

## Example

`gh-pages` is a devDependency: `npm run deploy` uses it; the live site does not import it.

## Related terms

[Dependency](#dependency) · [package.json](#packagejson) · [GitHub Pages](#github-pages)

---

# Drive-by refactor

## Definition

Changing extra things “while you are in the file”: renaming, moving folders, rewriting a component, fixing a nearby bug that was not in the [issue](#issue). The cleanup PR becomes a mystery novel.

## Why it matters

Reviewers cannot tell what was required. If something breaks, you cannot tell whether deletion or the extra rewrite caused it. Issue #3 names this as an [acceptance criterion](#acceptance-criteria): no drive-by refactors.

## Example

Deleting `WorkDesign.js` is in scope. While touching `Card.js` to drop unused `Link` / `SlideShow` imports, *also* extracting `ProjectProvider` would be a drive-by refactor.

## Related terms

[Scope](#scope) · [Scope creep](#scope-creep) · [Small diff](#small-diff) · [Incremental refactoring](#incremental-refactoring) · [Refactoring](#refactoring)

---

# Duplicate CSS

## Definition

The same visual rule written in two places, or a leftover copy after the real rule moved. One of them may be unused; both of them will drift apart.

## Why it matters

You might delete the copy that is actually applied, or keep both and wonder why a tweak “does nothing.” [Verification](#verification) means checking which stylesheet the element really uses.

## Example

`.barTop` exists in `App.css` and `Header.css`. `.bar` / `.secondBar` in `Work.css` style a commented-out Bar. Confirm `className` usage before deleting.

## Related terms

[Dead code](#dead-code) · [Code hygiene](#code-hygiene) · [Verification](#verification)

---

# EmailJS

## Definition

A service that lets a browser send email through their API so you do not run your own mail server. The contact form uses `@emailjs/browser` with a service ID, template ID, and public key.

## Why it matters

Those IDs are in source today. That is a later security/UX issue. For Issue #3, know that `ContactForm.js` is *used* — you only strip unused hooks (`useEffect`, `useReducer`), not EmailJS itself.

## Example

The audit lists `service_729iroo` and related keys in `ContactForm.js`. Removing unused imports there must not remove the EmailJS send call.

## Related terms

[Environment variable](#environment-variable) · [Unused import](#unused-import) · [Scope](#scope)

---

# Environment variable

## Definition

A value provided by the environment (a `.env` file, CI, the host) instead of being typed into source. CRA exposes variables that start with `REACT_APP_` to the client build.

## Why it matters

Secrets and deploy-specific IDs should not be scattered in components. The audit says the app never reads `process.env` today. Moving EmailJS IDs is **out of scope** for Issue #3.

## Example

`.gitignore` already ignores `.env`, but ContactForm still hardcodes EmailJS keys. That is recorded debt, not this cleanup.

## Related terms

[EmailJS](#emailjs) · [Configuration](#configuration) · [Technical debt](#technical-debt) · [Create React App](#create-react-app)

---

# ESLint

## Definition

A linter: a program that reads your JavaScript and reports likely mistakes (unused variables, missing deps in hooks, and so on). CRA ships `eslint-config-react-app`.

## Why it matters

ESLint often catches [unused imports](#unused-import) of JS symbols. It usually does **not** catch unused CSS classes or unused image files. Cleanup still needs human search.

## Example

`ContactForm.js` importing `useEffect` and `useReducer` without using them is the kind of thing `no-unused-vars` is meant to flag. Unused `.numbertext` in `SlideShow.css` will not show up the same way.

## Related terms

[Unused import](#unused-import) · [Create React App](#create-react-app) · [Hook](#hook) · [Verification](#verification)

---

# ES module

## Definition

The official JavaScript unit of reuse: a file that `export`s values and `import`s others. React apps are a graph of ES modules starting at `src/index.js`.

## Why it matters

“Is this file unused?” means “Can I reach an import of it from the entry [module](#module)?” That is the [import graph](#import-graph). Files that only exist on disk are not in the running app.

## Example

If nothing imported from `index.js` eventually imports `WorkDesign.js`, that file is not part of the app’s module graph, even though Git still tracks it.

## Related terms

[Module](#module) · [Import graph](#import-graph) · [Static import](#static-import) · [Named import](#named-import)

---

# Feature folder

## Definition

A folder named after a UI feature, holding that feature’s JS and CSS together (`Header/Header.js` + `Header.css`). Contrast with dumping every component in one `components/` pile.

## Why it matters

This repo’s feature folders are a strength the audit told you to keep. Deleting `WorkDesign/` is removing a leftover feature folder, not abandoning the pattern.

## Example

`ContactForm/`, `SlideShow/`, `EducationCard/` are feature folders. Pages currently live under `components/Pages/` instead of `src/pages/` — a later architecture choice.

## Related terms

[Component](#component) · [Architecture](#architecture) · [Code hygiene](#code-hygiene)

---

# Feature work

## Definition

Changes the user can notice: a new page, a better form, a hero rewrite. Opposite of paying down [technical debt](#technical-debt) (cleanup, tests, docs) that mainly help *builders*.

## Why it matters

Issue #3 is not feature work. If you start restyling the gallery, you have switched jobs. Mix the two and you cannot tell whether cleanup was safe.

## Example

Removing unused images does not add a project. Adding a new case study would be feature work and belongs on another issue.

## Related terms

[Technical debt](#technical-debt) · [Scope](#scope) · [Drive-by refactor](#drive-by-refactor)

---

# Firebase

## Definition

Google’s hosting and backend platform (Hosting, Cloud Functions, and more). This repo has `.firebaserc` pointing at project `portfolio-e0c73` and a `firebase.json` that talks about `functions/`, but there is no functions source and the live site is [GitHub Pages](#github-pages).

## Why it matters

Abandoned hosting config is [leftover configuration](#leftover-configuration). Leaving it without a sentence of intent makes the next person think deploy might be Firebase. Issue #3: delete **or** document.

## Example

`firebase.json` declares Cloud Functions; the `functions/` directory does not exist. The React app does not import Firebase SDKs.

## Related terms

[Leftover configuration](#leftover-configuration) · [Configuration](#configuration) · [GitHub Pages](#github-pages) · [Technical debt](#technical-debt)

---

# Git blame

## Definition

A Git view that shows, line by line, which [commit](#commit) last touched that line and who wrote it. It answers “when did this leftover arrive?” not “who to blame.”

## Why it matters

Before deleting something confusing, blame/log can show it was an experiment from 2023. That confidence is part of [safe deletion](#safe-deletion).

## Example

Optional for Issue #3: `git log -- src/components/WorkDesign/WorkDesign.js` to see when the design-tab experiment landed.

## Related terms

[Commit](#commit) · [Legacy code](#legacy-code) · [Safe deletion](#safe-deletion) · [Working tree](#working-tree)

---

# Git diff

## Definition

The readable list of lines Git thinks changed: added (`+`), removed (`-`). `git diff` is unstaged; `git diff --staged` is what the next [commit](#commit) would store.

## Why it matters

The diff is the review. For Issue #3 you want mostly deletions. If the diff rewrites `Header.js` logic, [scope](#scope) has slipped.

## Example

After cleanup, `git diff` should show removed imports in `Work.js` / `Card.js` / `ContactForm.js` and deleted files such as `WorkDesign.js`, not a new routing design.

## Related terms

[Small diff](#small-diff) · [Commit](#commit) · [Staging](#staging) · [Drive-by refactor](#drive-by-refactor) · [Verification](#verification)

---

# GitHub Pages

## Definition

GitHub’s static hosting. This site is served from the `gh-pages` branch at `https://lakhwinderr.github.io/Portfolio/`. Deploy is local: `npm run build` then `gh-pages -d build`.

## Why it matters

Knowing the real host stops you from treating Firebase as live. It also explains the `/Portfolio` prefix and the `homepage` field in [package.json](#packagejson).

## Example

The audit: Pages enabled, HTTPS on, no GitHub Actions, last app push February 2024. Issue #3 must not break `npm run build`, because that is what Pages would receive on the next deploy.

## Related terms

[basename](#basename) · [Firebase](#firebase) · [SPA](#spa) · [Production build](#production-build) · [devDependency](#devdependency)

---

# git rm

## Definition

The Git command that deletes a tracked file from the [working tree](#working-tree) *and* stages that deletion. Plain filesystem delete plus `git add` does the same job; `git rm` makes the intent obvious.

## Why it matters

Cleanup is not “lose the file on disk.” It is “record the deletion for the next [commit](#commit).” You still search for references *before* `git rm`.

## Example

After confirming nothing imports `WorkDesign.js`: `git rm src/components/WorkDesign/WorkDesign.js`. If the folder is empty, remove it too.

## Related terms

[Safe deletion](#safe-deletion) · [Commit](#commit) · [Rollback](#rollback) · [Working tree](#working-tree)

---

# HEAD

## Definition

Git’s pointer at “the [commit](#commit) I have checked out right now,” usually the tip of your current branch.

## Why it matters

[Rollback](#rollback) of an uncommitted deletion is “give me the file as it was at HEAD.” That is why committed history makes cleanup safe.

## Example

`git restore --source=HEAD -- src/assets/project3.jpg` brings back an image you deleted by mistake, as long as it was in the last commit.

## Related terms

[Rollback](#rollback) · [Commit](#commit) · [Main branch](#main-branch) · [Working tree](#working-tree)

---

# Hook

## Definition

A React function whose name starts with `use` that lets a [component](#component) use state, effects, context, and so on (`useState`, `useEffect`, `useReducer`, `useContext`).

## Why it matters

Importing a hook you never call is an [unused import](#unused-import). It is noise and can confuse readers about what the component does.

## Example

`ContactForm.js` imports `useEffect` and `useReducer` but (per the audit) does not use them. Removing those imports is in Issue #3; rewriting the form is not.

## Related terms

[Unused import](#unused-import) · [Component](#component) · [ESLint](#eslint) · [Named import](#named-import)

---

# Import graph

## Definition

The web of “file A imports file B imports file C,” starting at the app entry (`src/index.js`). Anything not reachable from that start is not in the running app (unless a tool reads it some other way).

## Why it matters

This is the main mental model for Issue #3. Disk listing ≠ running app. Walk the graph before you delete.

## Example

`index.js` → `App.js` → pages → `Work` / `ProjectContainer` / `Card`. `WorkDesign.js` never appears. Images only imported from `ProjectContainer.js` are in the graph if those `import` lines still exist.

## Related terms

[ES module](#es-module) · [Static import](#static-import) · [Module](#module) · [Dead code](#dead-code) · [Webpack](#webpack)

---

# Incremental refactoring

## Definition

Improving structure in small, safe slices instead of a big-bang rewrite. Each slice has [verification](#verification) and a [small diff](#small-diff).

## Why it matters

The recovery plan is a sequence of issues: cleanup, then routing, then a11y, then visuals. Incremental work means you always have a working portfolio.

## Example

Issue #3 only deletes dead things. A later issue may extract `src/data/` and `src/context/`. Doing both at once would hide whether a break came from deletion or from the move.

## Related terms

[Refactoring](#refactoring) · [Small diff](#small-diff) · [Milestone](#milestone) · [Drive-by refactor](#drive-by-refactor) · [Technical debt](#technical-debt)

---

# Issue

## Definition

A tracked piece of work on GitHub: problem, why it matters, [acceptance criteria](#acceptance-criteria), learning goals. It is the contract for a branch and a PR.

## Why it matters

The issue is the [scope](#scope) boundary. If the work is not in Issue #3, it waits. That is how a learning repo stays teachable.

## Example

[Issue #3](https://github.com/Lakhwinderr/Portfolio/issues/3) is repository cleanup. It sits in Milestone 1 — Repository Professionalism.

## Related terms

[Acceptance criteria](#acceptance-criteria) · [Milestone](#milestone) · [Scope](#scope) · [Repository audit](#repository-audit)

---

# Legacy code

## Definition

Code you inherited (including from your past self) that you must change without a full rewrite. It may work, be unused, or be copied from a tutorial. “Legacy” means “we have to deal with what is already there.”

## Why it matters

Fear of touching legacy files creates [dead code](#dead-code). [Safe deletion](#safe-deletion) and tests/manual checks make legacy tractable.

## Example

W3Schools leftover classes in `SlideShow.css`, the copied Hello World SCSS animation, Firebase files from an unfinished hosting try, and CRA defaults are all legacy in this repo.

## Related terms

[Boilerplate](#boilerplate) · [Technical debt](#technical-debt) · [Commented-out code](#commented-out-code) · [Firebase](#firebase)

---

# Leftover configuration

## Definition

[Configuration](#configuration) for a tool you no longer use, or never finished using. It is not always [dead code](#dead-code) in the JS sense, because nothing in `src/` imports it.

## Why it matters

Humans read config as “this is how we deploy.” Wrong config causes wrong production incidents. Decide: remove or document.

## Example

`.firebaserc` + `firebase.json` with no `functions/` folder and a GitHub Pages live site. Issue #3 forces that decision.

## Related terms

[Configuration](#configuration) · [Firebase](#firebase) · [Technical debt](#technical-debt) · [GitHub Pages](#github-pages)

---

# Main branch

## Definition

The default branch that should always be a known-good snapshot of the project (here: `main`). Feature work happens on other branches, then merges.

## Why it matters

The [repository audit](#repository-audit) reviewed `main` without changing application code. Cleanup should land on a branch, be verified, then merge so `main` stays shippable.

## Example

Audit date 13 August 2026, read-only review of `main`. Issue #3 should not experiment directly on `main` without a way to [roll back](#rollback).

## Related terms

[HEAD](#head) · [Commit](#commit) · [Rollback](#rollback) · [Repository](#repository)

---

# Manifest

## Definition

`public/manifest.json`: metadata for installing the site as a [PWA](#pwa) (name, icons, theme color). CRA’s default still says “Create React App Sample.”

## Why it matters

Default icons and names are part of the “unfinished CRA” look. Issue #3’s listed deletes are mostly `src/` leftovers; rewriting the manifest is presentation work unless you also remove icons the manifest still points at.

## Example

CRA `logo192.png` / `logo512.png` in `public/` are referenced by the stock manifest. Verify [public folder](#public-folder) references before deleting those icons.

## Related terms

[PWA](#pwa) · [Boilerplate](#boilerplate) · [public folder](#public-folder) · [Asset](#asset)

---

# Milestone

## Definition

A GitHub grouping of issues toward a larger goal. A milestone is a chapter; an [issue](#issue) is a scene.

## Why it matters

You learn to finish a chapter without stealing scenes from the next one. Cleanup in Milestone 1 unblocks architecture in Milestone 2.

## Example

Issue #3 is in “Milestone 1 — Repository Professionalism.” Extracting context and data layers is called out as later work in the audit’s implementation order.

## Related terms

[Issue](#issue) · [Incremental refactoring](#incremental-refactoring) · [Scope](#scope)

---

# Module

## Definition

One file that exports a reusable piece (a function, [component](#component), data, or styles). In this app, almost every `.js` file is an [ES module](#es-module).

## Why it matters

Unused module = nothing in the [import graph](#import-graph) needs it. Used module = deleting it breaks the [build](#build). That binary question is the heart of Issue #3.

## Example

`ScrollToTop.js` is a module. `WorkDesign.js` is a module that is unused. `Card.js` is a module that is used *and* currently also exports context.

## Related terms

[ES module](#es-module) · [Import graph](#import-graph) · [Component](#component) · [Dependency](#dependency)

---

# Named import

## Definition

Pulling a specific exported name out of a [module](#module): `import { Link } from 'react-router-dom'`. Contrast with a default import: `import Card from './Card'`.

## Why it matters

You can import a name and never use it. That is an [unused import](#unused-import). The rest of the module may still be needed.

## Example

`Card.js` importing `Link` and `SlideShow` without using them (audit). `Work.js` importing `ToggleButton`, `Card`, and `SlideShow` while the file may not reference them.

## Related terms

[Unused import](#unused-import) · [ES module](#es-module) · [Hook](#hook) · [ESLint](#eslint)

---

# package.json

## Definition

The npm manifest of the project: name, scripts, [dependencies](#dependency), and CRA fields like `homepage`. It is the front door for tooling.

## Why it matters

Scripts tell you how to [build](#build) and deploy. Dependency lists tell you what the app thinks it needs. Cleanup of *application* files should not casually rewrite this file unless a package becomes truly unused.

## Example

`"homepage": "https://lakhwinderr.github.io/Portfolio"` plus `predeploy` / `deploy` scripts. `"test": "react-scripts test"` still runs a failing stock test — out of scope for Issue #3.

## Related terms

[Dependency](#dependency) · [Create React App](#create-react-app) · [GitHub Pages](#github-pages) · [Configuration](#configuration)

---

# Presentational component

## Definition

A [component](#component) whose job is to look like something (a card, a button), not to own app-wide data or routing policy. When it also owns global state, the name stops matching the job.

## Why it matters

Mixing presentation and state is an [architecture](#architecture) problem. Issue #3 must not “fix” that mix; it should avoid making it worse while deleting unused imports inside `Card.js`.

## Example

`Card` displays a project tile *and* exports `ProjectProvider`. The audit wants context moved later.

## Related terms

[Component](#component) · [Context](#context) · [Architecture](#architecture) · [Drive-by refactor](#drive-by-refactor)

---

# Production build

## Definition

The optimized [build](#build) meant for real users (`npm run build` → `build/` folder). Code is minified; some development-only warnings disappear; missing [modules](#module) still fail the compile.

## Why it matters

[Verification](#verification) for Issue #3 includes the production build, not only `npm start`. That is what [GitHub Pages](#github-pages) would publish.

## Example

After deletions, `npm run build` must succeed. A missing image import that webpack cannot resolve fails here even if you never clicked that project.

## Related terms

[Build](#build) · [Bundle](#bundle) · [Webpack](#webpack) · [Verification](#verification) · [GitHub Pages](#github-pages)

---

# Prop

## Definition

Input data passed into a React [component](#component), like arguments to a function: `<Card item={project} />`. Props are read-only from the child’s point of view.

## Why it matters

`WorkDesign.js` is invalid because `updateProject` is both a prop and a local `const`. That is a [build hazard](#build-hazard) even though the component is unused.

## Example

Project cards receive an `item` object (title, images, link). Slideshow expects `item.array`. Those runtime details are out of scope for cleanup except as “do not break them.”

## Related terms

[Component](#component) · [Build hazard](#build-hazard) · [Context](#context)

---

# public folder

## Definition

CRA’s `public/` directory: files copied to the build *as-is* and addressed by URL, not by JS `import`. `index.html`, favicon, `manifest.json`, `robots.txt` live here.

## Why it matters

An image in `public/` can be unused by `src/` and still be referenced by HTML or the [manifest](#manifest). Search both trees. Do not assume `src/assets` rules apply.

## Example

Default CRA `logo192.png` / `logo512.png` / `favicon.ico`. The audit lists them; Issue #3 says verify before deleting. Check `public/index.html` and `manifest.json`.

## Related terms

[Asset](#asset) · [Manifest](#manifest) · [Create React App](#create-react-app) · [Unused asset](#unused-asset) · [Static import](#static-import)

---

# PWA

## Definition

Progressive Web App: a site that can be “installed” and sometimes work offline, using a [manifest](#manifest) and (often) a service worker. CRA scaffolds PWA comments and icons even if you never meant to ship one.

## Why it matters

Half a PWA (default icons, sample name, unused comments) is clutter. Either commit to a real PWA later or drop the unused bits on purpose. Issue #3 should not become a PWA project.

## Example

Audit: customize `manifest.json` or drop unused icons — listed as low priority, not as the core of Issue #3.

## Related terms

[Manifest](#manifest) · [Boilerplate](#boilerplate) · [Create React App](#create-react-app) · [Scope](#scope)

---

# React

## Definition

A JavaScript library for building UIs from [components](#component). This portfolio uses React 18 with `StrictMode`. You describe the UI as functions of state; React updates the DOM.

## Why it matters

Almost every issue in this recovery is “React in a real repo,” not a tutorial sandbox. Cleanup teaches you how React apps are *wired* (imports, components, CSS files) before you change behavior.

## Example

`src/index.js` mounts `<App />`. Routes in `App.js` render page components. Issue #3 should not change that wiring except by removing unused imports.

## Related terms

[Component](#component) · [Hook](#hook) · [Create React App](#create-react-app) · [React Router](#react-router)

---

# React Router

## Definition

The library that maps URLs to page [components](#component) (`react-router-dom`). `react-router-hash-link` adds links to `#work`-style anchors.

## Why it matters

Broken imports in Header/Footer/Card would break navigation. Cleanup must keep routing working. Changing `BrowserRouter` to use [`basename`](#basename) is a later issue.

## Example

Routes like `/Portfolio/About` and `/Portfolio/Work`. Footer uses a mix of `navigate()` and `HashLink`. Do not “clean that up” in Issue #3.

## Related terms

[basename](#basename) · [SPA](#spa) · [Component](#component) · [GitHub Pages](#github-pages)

---

# Refactoring

## Definition

Changing the shape of code without intending to change what the user sees. Extracting a file, renaming, sharing CSS — all refactoring. [Drive-by refactor](#drive-by-refactor) is refactoring that snuck into the wrong issue.

## Why it matters

Refactoring is valuable *when scoped*. Issue #3 is deletion-first. Structural moves wait so each [git diff](#git-diff) teaches one lesson.

## Example

Moving education data out of `Education.js` into `src/data/` is a refactor the audit recommends later. Deleting unused CSS classes is cleanup, not a redesign.

## Related terms

[Incremental refactoring](#incremental-refactoring) · [Drive-by refactor](#drive-by-refactor) · [Architecture](#architecture) · [Feature work](#feature-work)

---

# Regression

## Definition

Something that used to work and now does not, after a change. Cleanup can cause regressions if you delete a live [asset](#asset) or import.

## Why it matters

[Verification](#verification) exists to catch regressions before you [commit](#commit). Click every page; watch the console.

## Example

If Development/Design toggle stops working because you assumed `WorkDesign.js` was the design gallery, that is a regression — the live toggle is `ToggleButton` + `Work` / `ProjectContainer`.

## Related terms

[Verification](#verification) · [Rollback](#rollback) · [Safe deletion](#safe-deletion) · [Acceptance criteria](#acceptance-criteria)

---

# Repository

## Definition

The project as Git and GitHub know it: files, history, issues, and the hosted copy. “The repo” is more than `src/`.

## Why it matters

Recovery is about the whole repository looking intentional (docs, issues, history), not only pretty components. Issue #3 is one slice: the file tree vs the running app.

## Example

[Lakhwinderr/Portfolio](https://github.com/Lakhwinderr/Portfolio) includes `docs/repository-audit.md`, Firebase files at the root, and a `gh-pages` branch used for hosting.

## Related terms

[Repository audit](#repository-audit) · [Main branch](#main-branch) · [GitHub Pages](#github-pages) · [Issue](#issue)

---

# Repository audit

## Definition

A structured, mostly read-only review of what the repo *is*: stack, structure, docs, quality, accessibility, performance, debt, and a suggested order of work. It is a map, not a mandate to delete blindly.

## Why it matters

Issue #3’s candidate list comes from the audit. Your job is to [verify](#verification) each row. Audits go stale; the [import graph](#import-graph) is the source of truth on the day you delete.

## Example

`docs/repository-audit.md` (13 August 2026). Issue #3 points at §2 Dead or unused files and §10 Technical Debt.

## Related terms

[Technical debt](#technical-debt) · [Dead code](#dead-code) · [Issue](#issue) · [Verification](#verification) · [Acceptance criteria](#acceptance-criteria)

---

# Rollback

## Definition

Putting the project back to a known good state after a bad change. In Git that is usually restoring files from [HEAD](#head) or adding a revert [commit](#commit) — not rewriting published history.

## Why it matters

Cleanup is emotionally easier when you know deletion is reversible. That is why you commit often and avoid `reset --hard` on shared branches.

## Example

Build fails after deleting `dproject3.jpg` because an import remained: `git restore --source=HEAD -- src/assets/dproject3.jpg`, put the import back if needed, and re-check the graph. If you already committed, `git revert` is safer than editing history.

## Related terms

[HEAD](#head) · [Commit](#commit) · [git rm](#git-rm) · [Safe deletion](#safe-deletion) · [Working tree](#working-tree)

---

# Runtime

## Definition

What happens when the app is actually running in a browser (or during `npm start`), as opposed to what exists on disk or in comments.

## Why it matters

Issue #3 asks: does deleting this change runtime behaviour? The only acceptable answer is no. If a CSS rule is still applied, it is not dead.

## Example

Snake Game is not shown at runtime. Removing its commented data should not change Home. Removing `ToggleButton` would change runtime — so you only remove it from files that import it *without* using it, not the component itself if `Work` still needs it.

## Related terms

[Verification](#verification) · [Dead code](#dead-code) · [Production build](#production-build) · [Regression](#regression)

---

# Safe deletion

## Definition

A habit: search for references → record the decision → delete → [verify](#verification) build and pages → then [commit](#commit). Never delete from an audit list on trust alone.

## Why it matters

Most cleanup disasters skip the search step (dynamic paths, `public/` URLs, CSS class names). Safe deletion is the skill Issue #3 is meant to teach.

## Example

Search `WorkDesign`, `project3`, `dproject3`, `barTop`, `numbertext`, `BackGround`, and Firebase filenames across the whole repo before `git rm`.

## Related terms

[Import graph](#import-graph) · [Verification](#verification) · [Rollback](#rollback) · [git rm](#git-rm) · [Repository audit](#repository-audit)

---

# Scope

## Definition

The agreed boundary of this piece of work: what you will change and what you will explicitly not change.

## Why it matters

Scope is how a learning repo stays honest. Issue #3’s scope is deletion and unused-import cleanup. Architecture moves are outside.

## Example

In scope: unused files, unused assets, leftover Firebase decision, unused imports, commented blocks, unused CSS. Out of scope: `basename`, EmailJS env vars, Header effect bug, Vite migration, fixing `App.test.js`.

## Related terms

[Scope creep](#scope-creep) · [Acceptance criteria](#acceptance-criteria) · [Issue](#issue) · [Drive-by refactor](#drive-by-refactor)

---

# Scope creep

## Definition

The slow expansion of [scope](#scope) once you are already in the files. Each extra “quick fix” seems cheap; the PR becomes unreviewable.

## Why it matters

Creep hides lessons. You cannot write a retrospective about *cleanup* if you also rewrote routing. [Acceptance criteria](#acceptance-criteria) are the brake.

## Example

You open `SlideShow.css` to drop `.text` / `.numbertext` and start rewriting the carousel because the tutorial CSS looks ugly. That is scope creep.

## Related terms

[Scope](#scope) · [Drive-by refactor](#drive-by-refactor) · [Small diff](#small-diff) · [Feature work](#feature-work)

---

# SCSS

## Definition

A CSS superset (Sass) with nesting and extras, compiled to CSS. This repo has one SCSS file: `HelloWorld.scss`. CRA compiles it via a [transitive](#transitive-dependency) `sass` package unless you add `sass` yourself.

## Why it matters

The audit calls missing direct `sass` a fragile setup. Issue #3 should not add/remove Sass unless that file becomes unused (it is not — the hero uses it).

## Example

Hero animation in `HelloWorld.scss` (BEM, Google Fonts `@import`). Do not delete it as “leftover tutorial” just because it was copied; it is live UI.

## Related terms

[BEM](#bem) · [Transitive dependency](#transitive-dependency) · [Create React App](#create-react-app) · [Legacy code](#legacy-code)

---

# Small diff

## Definition

A [git diff](#git-diff) that a tired reviewer can understand in one sitting: one intent, few files, no surprise rewrites.

## Why it matters

Small diffs get better reviews and easier [rollbacks](#rollback). They are a professional habit, not just a style preference.

## Example

Issue #3 aims at a diff of deletions and unused imports only. If `git diff --stat` shows `Header.js` rewritten, the diff is no longer small in the way the issue asked.

## Related terms

[Git diff](#git-diff) · [Commit](#commit) · [Incremental refactoring](#incremental-refactoring) · [Drive-by refactor](#drive-by-refactor)

---

# SPA

## Definition

Single-Page Application: one HTML shell; React Router swaps views without full page loads. Refreshing a nested URL on [GitHub Pages](#github-pages) can 404 unless you add a fallback.

## Why it matters

This is why `BrowserRouter` plus `/Portfolio/About` is fragile on Pages. Fixing that is a later routing issue. Cleanup must not switch to HashRouter “while deleting files.”

## Example

Audit: CRA + `gh-pages` does not add `404.html` → `index.html` by default. Verify on the live site in a later issue.

## Related terms

[React Router](#react-router) · [GitHub Pages](#github-pages) · [basename](#basename) · [Create React App](#create-react-app)

---

# Staging

## Definition

The middle area in Git (`git add` / `git rm`) where you choose *which* [working tree](#working-tree) changes go into the next [commit](#commit). Unstaged edits stay local.

## Why it matters

You can delete experimentally, restore one file, and stage only the deletions you verified. Staging is how related deletions travel together without mixing a README rewrite.

## Example

Stage `WorkDesign.js` deletion with its folder. Do not stage an accidental edit to `Hero.js` in the same commit.

## Related terms

[Commit](#commit) · [Git diff](#git-diff) · [git rm](#git-rm) · [Working tree](#working-tree) · [Small diff](#small-diff)

---

# Static import

## Definition

An `import` written at the top of a file, resolved when the [bundle](#bundle) is built — not later at click time. CRA/webpack follows these to include JS, CSS, and images.

## Why it matters

A static import of an image counts even if the variable is only used in [commented-out code](#commented-out-code) *below* — actually, if the usage is commented but the import line is live, the asset still ships. Dynamic `import()` or string paths are easier to miss; this repo mostly uses static imports.

## Example

`import project3 from '../assets/project3.jpg'` in `ProjectContainer.js` puts that JPEG in the webpack graph. Files that only sit in `src/assets/` with **no** import are unused in a different way (not bundled, still in Git).

## Related terms

[Import graph](#import-graph) · [Webpack](#webpack) · [Bundle](#bundle) · [Unused asset](#unused-asset) · [ES module](#es-module) · [public folder](#public-folder)

---

# Technical debt

## Definition

Shortcuts and leftovers that save time now and cost time later: unused files, copied tutorials, secrets in source, tests that never matched the app. Debt is not a moral failure; unpaid debt compounds.

## Why it matters

Issue #3 is a debt payment, not a new feature. Engineers need to tell debt work from [feature work](#feature-work) so they schedule both.

## Example

Audit §10 lists CRA placeholders, W3Schools slideshow leftovers, Firebase without sources, unused dependencies classification, and commented experiments. Issue #3 pays the “dead files / leftover config” slice.

## Related terms

[Dead code](#dead-code) · [Legacy code](#legacy-code) · [Feature work](#feature-work) · [Repository audit](#repository-audit) · [Leftover configuration](#leftover-configuration)

---

# Transitive dependency

## Definition

A package you did not list yourself but some [dependency](#dependency) of yours listed. It appears in `package-lock.json` and `node_modules`.

## Why it matters

If you rely on it directly (like compiling [SCSS](#scss)), it should be a direct dependency. Otherwise an upstream change can remove it and your build breaks “for no reason.”

## Example

`sass` is not in this repo’s `package.json` but CRA’s stack may still compile `HelloWorld.scss` through a transitive `sass`. The audit flags that as fragile — later, not Issue #3.

## Related terms

[Dependency](#dependency) · [SCSS](#scss) · [package.json](#packagejson) · [Build](#build)

---

# Unused asset

## Definition

An [asset](#asset) the running UI never shows and that you have confirmed is not required by HTML, the [manifest](#manifest), or a live [static import](#static-import).

## Why it matters

Binaries dominate repo size (~19.8 MB on GitHub per the audit). Unused screenshots waste clone time and attention.

## Example

`project3.jpg` and `dproject3.jpg` if they are only tied to commented Snake Game data. After removing the imports, delete the files. Keep `Design/Homepage.jpg` if a live project still imports it.

## Related terms

[Asset](#asset) · [Static import](#static-import) · [Dead code](#dead-code) · [Bundle](#bundle) · [Safe deletion](#safe-deletion)

---

# Unused import

## Definition

An `import` line whose names or default binding are never used in that file. The [module](#module) you imported from might still be used elsewhere.

## Why it matters

Unused imports lie about dependencies of *this* file. They also keep [webpack](#webpack) considering those [modules](#module) if nothing else pulled them in — or they just add noise if something else already did.

## Example

Audit: `Work.js` imports ToggleButton, Card, SlideShow unused; `Card.js` imports SlideShow and `Link` unused; `ContactForm.js` imports `useEffect` and `useReducer` unused. Verify each before deleting the line — do not delete `ToggleButton.js` if another file still uses it.

## Related terms

[Named import](#named-import) · [Hook](#hook) · [ESLint](#eslint) · [Dead code](#dead-code) · [Import graph](#import-graph)

---

# Verification

## Definition

Proving the change did what you meant and nothing else. For this issue: search again, run the app, click pages, run the [production build](#production-build), read the [git diff](#git-diff).

## Why it matters

Deletion without verification is guessing. Verification is how [safe deletion](#safe-deletion) earns trust.

## Example

Issue #3: `npm install`, `npm start`, `npm run build`, Home / About / Education / Contact / project slideshows, browser console, no broken images or imports.

## Related terms

[Acceptance criteria](#acceptance-criteria) · [Regression](#regression) · [Production build](#production-build) · [Safe deletion](#safe-deletion) · [Runtime](#runtime)

---

# Webpack

## Definition

The bundler CRA uses under `react-scripts`. It follows [static imports](#static-import), transforms JS/CSS/images, and emits the [bundle](#bundle). You rarely see its config unless you eject.

## Why it matters

“Why is this image in the build if I commented out the slideshow data?” Because webpack believes the `import` line. Understanding webpack’s graph is how you clean assets correctly.

## Example

Imported JPEGs in `ProjectContainer.js` enter the webpack asset graph. Files only sitting in `src/assets/` with zero imports do not, but they still clutter Git.

## Related terms

[Create React App](#create-react-app) · [Bundle](#bundle) · [Static import](#static-import) · [Import graph](#import-graph) · [Build](#build)

---

# Working tree

## Definition

The files on disk in your project folder right now, including edits you have not [committed](#commit). Git compares this to [HEAD](#head) to make a [diff](#git-diff).

## Why it matters

Search the working tree for references *before* deletion. After deletion, the working tree is where you run [verification](#verification) before you stage.

## Example

`git status` after removing `WorkDesign.js` should show a deleted file. `git restore -- .` would throw away *all* uncommitted work — too blunt if you also have glossary edits you want to keep.

## Related terms

[HEAD](#head) · [Staging](#staging) · [Git diff](#git-diff) · [Rollback](#rollback) · [git rm](#git-rm)
