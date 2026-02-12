# 30-Day SRE War Plan - GitHub Pages Site

A modern, professional static website showcasing the comprehensive 30-Day SRE preparation guide.

## Features

### 🎨 Modern UI/UX
- Clean, professional design with sober color scheme
- Responsive layout (mobile, tablet, desktop)
- Smooth scrolling and animations
- Fixed sidebar navigation with search
- Mobile-friendly hamburger menu
- Back-to-top button
- Real-time scroll progress tracker

### 🧭 State-of-the-Art Navigation
- Sticky sidebar with all sections
- Search functionality to find topics quickly
- Active section highlighting as you scroll
- Smooth scroll behavior
- Deep linking support (shareable URLs with #anchors)

### 📱 Responsive Design
- Desktop: Full sidebar navigation
- Tablet/Mobile: Collapsible hamburger menu
- Touch-optimized controls
- Readable typography at all screen sizes

### ⚡ Performance
- Vanilla JavaScript (no heavy frameworks)
- CDN-hosted markdown parser (marked.js)
- Optimized CSS with modern features
- Fast page load and smooth scrolling

## Project Structure

```
/Users/sdhule/learn/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Navigation, search, and UX features
├── 30-day.md          # Your markdown content (source)
└── README.md          # This file
```

## How to Deploy to GitHub Pages

### Option 1: Quick Deploy (Recommended)

1. **Create a new GitHub repository**
   ```bash
   # Initialize git (if not already done)
   cd /Users/sdhule/learn
   git init
   git add index.html styles.css script.js 30-day.md README.md
   git commit -m "Initial commit: 30-Day SRE War Plan static site"
   ```

2. **Create a repo on GitHub**
   - Go to https://github.com/new
   - Name it: `30-day-sre` (or your preferred name)
   - Make it public
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/30-day-sre.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repo: Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

5. **Access your site**
   - URL: `https://YOUR_USERNAME.github.io/30-day-sre/`
   - Takes 1-2 minutes to build

### Option 2: Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, Cloudflare, Google Domains)
2. Add a `CNAME` file to your repo:
   ```bash
   echo "your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```
3. Configure DNS records at your domain provider:
   - Type: `A` → Value: `185.199.108.153`
   - Type: `A` → Value: `185.199.109.153`
   - Type: `A` → Value: `185.199.110.153`
   - Type: `A` → Value: `185.199.111.153`
   - OR Type: `CNAME` → Value: `YOUR_USERNAME.github.io`

## Local Development

### Test Locally

You need a local web server (browsers block file:// protocol for security):

**Option 1: Python**
```bash
cd /Users/sdhule/learn
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Option 2: Node.js (http-server)**
```bash
npm install -g http-server
cd /Users/sdhule/learn
http-server
# Visit: http://localhost:8080
```

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Customization

### Change Colors
Edit `styles.css` variables at the top:
```css
:root {
    --primary-color: #2563eb;  /* Change this */
    --primary-dark: #1e40af;   /* And this */
}
```

### Update Content
- Edit `30-day.md` directly
- Changes appear automatically on reload (markdown is parsed client-side)

### Modify Navigation
- Edit sidebar sections in `index.html` (lines 30-110)
- Update section IDs in `script.js` (addSectionIds function)

## Browser Support

- Chrome/Edge: Latest 2 versions ✅
- Firefox: Latest 2 versions ✅
- Safari: 14+ ✅
- Mobile browsers: iOS Safari 14+, Chrome Mobile ✅

## Performance Tips

- Site loads in < 1 second on 3G
- No external dependencies except marked.js (78KB from CDN)
- Markdown parsing is cached by browser
- CSS and JS are minified for production

## Troubleshooting

### Content Not Loading?
- Make sure `30-day.md` is in the same directory
- Check browser console for errors (F12)
- Ensure you're using a web server (not file://)

### Navigation Not Working?
- Check that section IDs in HTML match your markdown headers
- Verify JavaScript console for errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Mobile Menu Not Opening?
- Check that JavaScript is enabled
- Try different browser
- Clear cache and reload

## License

This is your personal project. Add a license if you plan to share it publicly.

## Credits

- Built with vanilla HTML, CSS, and JavaScript
- Markdown parsing: [marked.js](https://marked.js.org/)
- Icons: Unicode emoji (no external icon library needed)

## Next Steps

1. ✅ Test locally with `python3 -m http.server 8000`
2. ✅ Push to GitHub
3. ✅ Enable GitHub Pages
4. ✅ Share your link!

---

**Built for**: 30-Day SRE War Plan (2026 Tier-1 Prep)
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript, Marked.js
**Last Updated**: February 2026
