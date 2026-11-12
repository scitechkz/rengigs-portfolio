# Rengigs Nigeria Limited (RC-9257667) — Corporate Portfolio Website

Official React + Vite + Tailwind CSS corporate portfolio frontend for **Rengigs Nigeria Limited (RC-9257667)**.

## Local PC Setup

1. Extract this ZIP folder to your local workspace.
2. Open a terminal inside the `rengigs-portfolio` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown in your terminal (typically `http://localhost:5173`).

## Deploying to Netlify

### Option A: Git-Connected Continuous Deployment (Recommended)
1. Push this project folder to a GitHub repository.
2. Log in to **Netlify** -> **Add new site** -> **Import an existing project**.
3. Select your GitHub repository. Netlify will automatically read `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.

### Option B: Instant Drag-and-Drop / CLI Deploy
1. Run `npm run build` locally to generate the `dist/` folder.
2. Drag and drop the `dist/` folder directly into Netlify Drop, or run `npx netlify-cli deploy --prod --dir=dist`.
