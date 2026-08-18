# Lakhwinder Singh — Portfolio

A personal portfolio website where I share my software projects, education, and background.

**Live site:** [https://lakhwinderr.github.io/](https://lakhwinderr.github.io/)

## What this project is

This is a single-page React application that works as my online portfolio. Visitors can browse my work, read about me, view my education and certifications, and send a message through the contact form.

## Main sections

| Section | Route |
|---------|-------|
| Home / Work | `/` and `/#work` |
| About | `/about` |
| Education | `/education` |
| Contact | `/contact` |

## Technologies used

- React
- JavaScript
- HTML
- CSS
- React Router
- Formik
- EmailJS
- Git / GitHub

The project was created with [Create React App](https://github.com/facebook/create-react-app) and is deployed as a static site.

## Project structure

A quick guide for anyone new to the repository:

```
Portfolio/
├── public/              # Static files (HTML shell, 404 redirect for GitHub Pages)
├── src/
│   ├── components/      # UI pieces (Header, Hero, Work, Contact form, etc.)
│   ├── config/          # Shared settings (routes, EmailJS config)
│   ├── context/         # Theme (light / dark mode)
│   ├── assets/          # Images and icons used in the site
│   ├── App.js           # Route definitions
│   └── index.js         # App entry point
├── package.json         # Dependencies and scripts
└── README.md
```

- **`src/components/Pages/`** — One file per page (Home, About, Education, Contact).
- **`src/components/`** — Reusable sections such as the header, footer, project cards, and contact form.
- **`src/config/`** — Central place for paths and EmailJS settings.

## Local setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
```

This creates an optimized `build/` folder with the static files ready for deployment.

## Deployment

This repository holds the **source code** only.

The live site at [https://lakhwinderr.github.io/](https://lakhwinderr.github.io/) is deployed to a separate GitHub repository (`Lakhwinderr.github.io`), which is the GitHub Pages user-site repo for my account. After building locally, production files are published to that repository’s `main` branch.

## Author

**Lakhwinder Singh**
