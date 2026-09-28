# ByteSpace New

Responsive implementation of the supplied ByteSpace design references.

## Pages
- `/` — full landing page
- `/login.html` — bonus login page
- `/register.html` — bonus signup page

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Git workflow
```bash
git checkout -b feat/bytespace-landing
git add .
git commit -m "Build ByteSpace landing and auth pages"
git push -u origin feat/bytespace-landing
```
Then open a PR into `main`. Deploy the repository on Vercel using the Vite preset.
