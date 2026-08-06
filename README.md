# LRMS Portal — SDO Romblon

A static, no-build directory site mirroring the structure of the live [LRMS Portal](https://sites.google.com/deped.gov.ph/lrms-portal-sdo-romblon/lrms-portal) (Google Sites) for the Schools Division Office of Romblon: resource categories, quick links, connected regional/national systems, and LRMS Team contacts. Pure HTML/CSS/JS — no framework, no build step.

## Files

- `index.html` — page structure
- `styles.css` — all styling
- `portal-data.js` — categories, quick links, external systems, and staff (**this is the data you'll edit**)
- `script.js` — search, filtering, and rendering logic

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (or use an existing one) and push these files to it:
   ```bash
   git init
   git add .
   git commit -m "Initial LR portal site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to your repo's **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
5. GitHub gives you a live URL within a minute or two, usually:
   `https://<your-username>.github.io/<your-repo>/`

No build step, no dependencies to install — GitHub Pages serves the static files as-is.

## Editing the content

Open `portal-data.js`:

- `CATEGORIES` — the 18 resource categories shown as cards in the Browse section. Each links to the matching page on the live Google Sites portal by default; repoint `url` to your own hosted files once available.
- `QUICK_LINKS` — forms and shared-drive links (CSM survey, RTP, RMA, Phil-IRI, CRLA3, etc.).
- `EXTERNAL_SYSTEMS` — regional/national platforms (DepEd TV, MATATAG Portal, LRMIS, DepEd LR Portal, etc.).
- `STAFF` — the LRMS Team, shown in the Contact section with mailto links.
- `PASSWORD_RESET_URL` — the Google Form used for LRMDS password resets.

Everything renders from this one file — add, remove, or reorder entries and the page updates automatically.

## About the images

The logo, LR Updates post photos, and office photo are currently **hotlinked directly from the live Google Sites portal's image CDN** (`lh3.googleusercontent.com`) — I don't have a way to download and re-host binary files in this environment. This works fine for a demo, but has two real risks for production:

1. Those URLs belong to Google Sites' internal CDN and aren't guaranteed to stay stable long-term.
2. It depends on the original LRMS Portal staying online.

For a real deployment, download the logo and photos yourself (right-click → Save Image on the live site, or export from Drive) and put them in a local `images/` folder, then update the `src` attributes in `index.html` to point to `images/logo.png` etc. instead of the external URL.
