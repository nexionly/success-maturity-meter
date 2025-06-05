# GitHub Pages Deployment Guide

## Setup Instructions

1. **Update Repository Name**: In `vite.config.ts`, replace `your-repo-name` with your actual GitHub repository name:
   ```typescript
   base: mode === 'production' ? '/your-actual-repo-name/' : '/',
   ```

2. **Add Deploy Script**: Add this script to your `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy Commands**:
   ```bash
   npm run deploy
   ```

## GitHub Repository Settings

1. Go to your repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `gh-pages`
4. Select folder: `/ (root)`

## Important Notes

- Your site will be available at: `https://[username].github.io/[repo-name]/`
- The `404.html` file handles client-side routing for React Router
- Make sure to update the base path in `vite.config.ts` with your actual repo name
- The `gh-pages` package is now installed as a dev dependency

## Troubleshooting

- If assets don't load, verify the base path matches your repository name
- If routing doesn't work, ensure the 404.html file is in the public folder
- For custom domains, add a CNAME file to the public folder with your domain name