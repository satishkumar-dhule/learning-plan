# Migration to Astro Framework - 30-Day SRE Site

## Why Astro?

Astro is the perfect framework for this content-heavy site because:

✅ **Built for Content** - Native markdown support, collections, and content management
✅ **Zero JS by Default** - Ships only the JS you need, blazing fast
✅ **Island Architecture** - Interactive components only where needed
✅ **SEO Optimized** - Perfect for static content sites
✅ **Modern DX** - Hot reloading, TypeScript, component frameworks
✅ **GitHub Pages Ready** - Static site generation built-in

## Project Structure

```
30-day-sre-astro/
├── src/
│   ├── components/
│   │   ├── Navigation.astro       # Sidebar navigation
│   │   ├── DayCard.astro          # Individual day section
│   │   ├── SearchBar.astro        # Search functionality
│   │   ├── BackToTop.astro        # Scroll to top button
│   │   └── ProgressBar.astro      # Reading progress
│   ├── layouts/
│   │   └── MainLayout.astro       # Main page layout
│   ├── pages/
│   │   ├── index.astro            # Home page (all content)
│   │   └── day/
│   │       ├── [slug].astro       # Individual day pages
│   │       └── index.astro        # Day index
│   ├── content/
│   │   └── days/
│   │       ├── day-01.md          # Split from 30-day.md
│   │       ├── day-02.md
│   │       └── ...
│   └── styles/
│       └── global.css             # Global styles
├── public/
│   └── favicon.svg
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind configuration
└── package.json
```

## Features to Implement

### 1. Page-Like Day Sections
- Each day gets a distinct visual "page" with clear boundaries
- Full-height sections with scroll snap
- Page transitions between days
- Day counter/indicator showing "Day X of 30"

### 2. Navigation
- Sticky sidebar with all days
- Active day highlighted
- Progress indicator
- Search/filter functionality
- Mobile hamburger menu

### 3. Visual Enhancements
- Card-style day sections
- Gradient backgrounds for each week
- Smooth scroll transitions
- Loading animations
- Page transition effects

### 4. Interactivity (Optional Islands)
- Search bar (interactive)
- Mobile menu toggle (interactive)
- Scroll progress (interactive)
- Day navigation (interactive)

## Implementation Steps

### Phase 1: Setup (10 minutes)
```bash
cd 30-day-sre-astro
npm install
npx astro add tailwind
npx astro add @astrojs/mdx  # For enhanced markdown
```

### Phase 2: Content Structure (20 minutes)
1. Split 30-day.md into individual day files
2. Create frontmatter for each day (title, date, week, etc.)
3. Set up Astro content collections
4. Create day index and metadata

### Phase 3: Components (30 minutes)
1. Create Navigation component with Tailwind
2. Create DayCard component for each day
3. Create Layout component
4. Create helper components (SearchBar, BackToTop, etc.)

### Phase 4: Styling (20 minutes)
1. Set up Tailwind config with custom theme
2. Create page-like visual design
3. Add transitions and animations
4. Mobile responsive design

### Phase 5: Interactivity (15 minutes)
1. Add client-side JS for search
2. Add scroll handling
3. Add mobile menu
4. Add progress tracking

### Phase 6: Build & Deploy (5 minutes)
1. Build static site: `npm run build`
2. Test locally: `npm run preview`
3. Deploy to GitHub Pages

## Total Time: ~90 minutes

## Benefits Over Vanilla Approach

| Feature | Vanilla | Astro |
|---------|---------|-------|
| Build Time | N/A | Optimized |
| Performance | Good | Excellent (0 JS) |
| SEO | Manual | Automatic |
| Component Reuse | None | Full |
| Type Safety | None | TypeScript |
| Content Management | Manual | Collections API |
| Image Optimization | Manual | Automatic |
| CSS | Manual | Tailwind + Scoped |
| Hot Reload | Manual | Built-in |
| Production Build | Manual | Optimized |

## Quick Start Commands

```bash
# Development
cd 30-day-sre-astro
npm run dev
# Visit: http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run build
# Copy dist/ to your repo
```

## Configuration for GitHub Pages

In `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/30-day-sre',
  integrations: [tailwind(), mdx()],
  output: 'static',
});
```

## Sample Day Component

```astro
---
// src/components/DayCard.astro
const { day, title, content } = Astro.props;
const weekNumber = Math.ceil(day / 7);
const weekColors = {
  1: 'from-blue-50 to-indigo-50',
  2: 'from-green-50 to-emerald-50',
  3: 'from-purple-50 to-pink-50',
  4: 'from-orange-50 to-red-50',
};
---

<section
  id={`day-${day}`}
  class={`min-h-screen p-8 bg-gradient-to-br ${weekColors[weekNumber]}
         scroll-mt-16 snap-start snap-always`}
>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-2xl shadow-lg p-8">
      <!-- Day Badge -->
      <div class="inline-flex items-center px-4 py-2 bg-blue-600 text-white
                  rounded-full text-sm font-semibold mb-4">
        Day {day} of 30 • Week {weekNumber}
      </div>

      <!-- Title -->
      <h2 class="text-4xl font-bold mb-6 text-gray-900">
        {title}
      </h2>

      <!-- Content -->
      <div class="prose prose-lg max-w-none">
        <slot />
      </div>

      <!-- Navigation -->
      <div class="flex justify-between mt-8 pt-8 border-t">
        {day > 1 && (
          <a href={`#day-${day-1}`}
             class="text-blue-600 hover:text-blue-800 font-medium">
            ← Previous Day
          </a>
        )}
        {day < 30 && (
          <a href={`#day-${day+1}`}
             class="text-blue-600 hover:text-blue-800 font-medium ml-auto">
            Next Day →
          </a>
        )}
      </div>
    </div>
  </div>
</section>
```

## Next Steps

1. **Wait for npm install** to complete
2. **Add Tailwind**: `npx astro add tailwind`
3. **Split markdown content** into individual day files
4. **Create components** following the structure above
5. **Build and test** locally
6. **Deploy** to GitHub Pages

---

**Framework**: Astro 5.x
**Styling**: Tailwind CSS
**Content**: Markdown + MDX
**Deployment**: GitHub Pages (Static)
**Build Time**: < 1 minute
**Page Load**: < 500ms
