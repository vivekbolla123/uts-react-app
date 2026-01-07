# UTS React App

This project is a React-based clone of the UTS Ticketing App, built with Vite.

## Project Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Publishing / Deployment

The app has been built for production. You can find the optimized files in the `dist` folder.

### Option 1: Netlify (Easiest)
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag and drop the `dist` folder from this project into the browser window.
3.  Your app will be live immediately!

### Option 2: Vercel
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in this directory and follow the prompts.

### Option 3: GitHub Pages
1.  Create a new repository on GitHub.
2.  Push this code:
    ```bash
    git remote add origin <your-repo-url>
    git branch -M main
    git push -u origin main
    ```
3.  Configure GitHub Pages in the repo settings to deploy from the `gh-pages` branch (you may need to install `gh-pages` package).
