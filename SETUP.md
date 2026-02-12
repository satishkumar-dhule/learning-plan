# Setup Guide

## Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (comes with Node.js)
- **Git**: For version control

## Installation

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/30-day-sre-guide.git
cd 30-day-sre-guide
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- `vite` - Build tool
- `typescript` - Type checking
- `@playwright/test` - Testing framework
- `marked` - Markdown parsing

### 3. Verify Installation

```bash
npm run type-check
```

Should complete without errors.

## Development

### Start Development Server

```bash
npm run dev
```

This:
- Starts Vite dev server on `http://localhost:5173`
- Opens browser automatically
- Enables hot module replacement (HMR)
- Watches for file changes

### Make Changes

1. Edit files in `src/`
2. Browser auto-refreshes
3. TypeScript errors show in console

### Common Development Tasks

**Add a new day**:
1. Edit `src/data/days.ts`
2. Add day object to `days` record
3. Save and see changes immediately

**Update styles**:
1. Edit `src/styles/main.css`
2. Changes apply instantly

**Modify components**:
1. Edit `src/components/*.ts`
2. Browser refreshes automatically

## Testing

### Run All Tests

```bash
npm test
```

Runs tests in headless mode (no browser window).

### Run Tests with Browser

```bash
npm run test:headed
```

Shows browser window so you can see what's happening.

### Interactive Test UI

```bash
npm run test:ui
```

Opens Playwright's interactive UI for debugging.

### Run Specific Test

```bash
npx playwright test tests/app.spec.ts -g "should load app"
```

### Debug a Test

```bash
npx playwright test --debug
```

Opens debugger where you can step through tests.

## Building for Production

### Create Production Build

```bash
npm run build
```

This:
- Compiles TypeScript
- Minifies JavaScript
- Optimizes CSS
- Outputs to `dist/` folder

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Push to GitHub:
   ```bash
   git add dist/
   git commit -m "Build for production"
   git push origin main
   ```

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Select `main` branch, `/root` folder
   - Save

### Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Import project
4. Vercel auto-detects Vite
5. Deploy

### Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Connect GitHub account
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Module Not Found Errors

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Check for type errors:

```bash
npm run type-check
```

### Tests Failing

1. Ensure dev server is running: `npm run dev`
2. Clear test artifacts: `rm -rf test-results playwright-report`
3. Run tests again: `npm test`

### Storage Not Working

1. Check browser's IndexedDB is enabled
2. Open DevTools → Application → IndexedDB
3. Look for "SREGuide" database
4. Clear and try again

### Styles Not Loading

1. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Rebuild: `npm run build`
3. Check `dist/` folder has CSS files

## Project Structure

```
30-day-sre-guide/
├── src/
│   ├── main.ts              # Entry point
│   ├── app.ts               # App initialization
│   ├── index.html           # HTML template
│   ├── components/
│   │   ├── sidebar.ts       # Navigation
│   │   └── content.ts       # Day display
│   ├── data/
│   │   └── days.ts          # Content definitions
│   ├── storage/
│   │   └── db.ts            # IndexedDB management
│   └── styles/
│       └── main.css         # All styles
├── tests/
│   └── app.spec.ts          # E2E tests
├── dist/                    # Production build (generated)
├── node_modules/            # Dependencies (generated)
├── package.json             # Project metadata
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Build config
├── playwright.config.ts     # Test config
├── README.md                # User guide
├── ARCHITECTURE.md          # Technical design
└── SETUP.md                 # This file
```

## Environment Variables

No environment variables needed for development.

For production, you might want to add:
- `VITE_API_URL` - If adding backend later
- `VITE_ANALYTICS_ID` - If adding analytics

## Next Steps

1. **Start Development**: `npm run dev`
2. **Explore Code**: Check `src/` folder
3. **Add Content**: Edit `src/data/days.ts`
4. **Run Tests**: `npm test`
5. **Build & Deploy**: `npm run build` then deploy `dist/`

## Getting Help

- Check `README.md` for overview
- Check `ARCHITECTURE.md` for technical details
- Look at test files for usage examples
- Check browser console for errors

## Tips & Tricks

### Fast Reload

Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows) to hard refresh.

### Debug Storage

In browser console:
```javascript
// Open IndexedDB
const db = await new Promise((resolve, reject) => {
  const req = indexedDB.open('SREGuide')
  req.onsuccess = () => resolve(req.result)
  req.onerror = () => reject(req.error)
})

// Get progress
const tx = db.transaction('progress', 'readonly')
const store = tx.objectStore('progress')
const req = store.get('progress')
req.onsuccess = () => console.log(req.result)
```

### View Network Requests

Open DevTools → Network tab to see all requests.

### Check Performance

Open DevTools → Performance tab, record, interact, stop.

## Support

For issues:
1. Check this guide
2. Check browser console for errors
3. Open GitHub issue with details
4. Include browser version and OS

---

**Happy learning! 🚀**
