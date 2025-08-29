How to deploy this Next.js app to Vercel

Quick checklist
- Ensure the repo is pushed to GitHub (or Git provider supported by Vercel).
- Option A: Use Vercel web dashboard "Import Project" and select this repository.
- Option B: Use Vercel CLI for a quick deploy.

Recommended: build locally first to catch errors

1) Install deps and build locally

```powershell
npm install
npm run build
```

2) Deploy via Vercel dashboard
- Go to https://vercel.com/new
- Import your Git repository and follow the default Next.js settings. Vercel will detect Next.js.

3) Or deploy via Vercel CLI

```powershell
npm i -g vercel
npx vercel login
npx vercel --prod
```

Notes
- This project uses Next.js. The `vercel.json` file is present with a minimal configuration.
- If you use environment variables, add them in the Vercel dashboard under Project Settings > Environment Variables.