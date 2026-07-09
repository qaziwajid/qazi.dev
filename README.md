# Wajid Ul Haque — Portfolio

A single-page React portfolio built with Vite + Tailwind CSS, generated from the resume of Wajid Ul Haque (Full-Stack Software Engineer).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Deploy to GitHub Pages

You have two options — pick one.

### Option A: Automatic, via GitHub Actions (recommended)

This repo already includes `.github/workflows/deploy.yml`, which builds and deploys automatically every time you push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit (or re-run the workflow from the **Actions** tab).
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No extra setup needed — `vite.config.js` already uses a relative base path (`./`), so it works regardless of the repo name.

### Option B: Manual, via the `gh-pages` package

1. Push this project to a GitHub repository.
2. Run:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the project and pushes the `dist` folder to a `gh-pages` branch.
3. In the repo, go to **Settings → Pages** and set **Source** to the `gh-pages` branch (`/root`).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Project structure

```
├── index.html            # HTML entry point
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # The portfolio page itself
│   └── index.css          # Tailwind base styles
├── vite.config.js         # Vite config (relative base for GH Pages)
├── tailwind.config.js
├── postcss.config.js
└── .github/workflows/deploy.yml   # Auto-deploy workflow
```

## Editing content

All resume content (experience, skills, education, contact info) lives as plain data arrays near the top of `src/App.jsx` — edit those arrays to update the page without touching any layout code.