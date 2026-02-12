# 30-Day SRE Interview Prep Guide

A modern, state-of-the-art web application for comprehensive SRE interview preparation with persistent progress tracking.

## ✨ Features

- **Modern Architecture**: TypeScript, Vite, modular components
- **Progress Tracking**: Browser-based IndexedDB storage (no backend needed)
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Week-Based Organization**: 4 weeks of structured learning (30 days)
- **Rich Content**: Topics, resources, and practice exercises per day
- **Fast Performance**: Optimized build, lazy loading, smooth interactions
- **Comprehensive Testing**: Playwright E2E tests

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
npm run preview
```

## 📊 Project Structure

```
src/
├── main.ts              # Entry point
├── app.ts               # App initialization & routing
├── components/
│   ├── sidebar.ts       # Navigation sidebar
│   └── content.ts       # Day content display
├── data/
│   └── days.ts          # Day content definitions
├── storage/
│   └── db.ts            # IndexedDB management
└── styles/
    └── main.css         # Global styles

tests/
└── app.spec.ts          # E2E tests

playwright.config.ts     # Test configuration
vite.config.ts          # Build configuration
tsconfig.json           # TypeScript configuration
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Run headed (see browser)
npm run test:headed
```

## 📱 Features

### Progress Tracking
- Persistent storage using IndexedDB
- Track completed days
- Visual progress bar
- Automatic save on completion

### Navigation
- Sidebar with all 30 days organized by week
- Previous/Next buttons for sequential learning
- Quick day selection
- Active day highlighting

### Content Organization
- **Week 1**: Systems Internals, Networking & Cloud
- **Week 2**: Kubernetes, Infrastructure as Code & CI/CD
- **Week 3**: Observability, Security & Incident Management
- **Week 4**: Architecture & Global Reliability

### Each Day Includes
- Learning topics
- Curated resources (videos, articles, docs)
- Practice exercises (LeetCode links)
- Navigation controls

## 🎨 Design

- Clean, modern UI with gradient accents
- Color-coded weeks for visual organization
- Responsive grid layouts
- Smooth transitions and interactions
- Accessible color contrast

## 🔧 Technology Stack

- **Frontend**: TypeScript, Vanilla JS
- **Build**: Vite
- **Storage**: IndexedDB
- **Testing**: Playwright
- **Styling**: CSS3 (Grid, Flexbox, Gradients)

## 📈 Performance

- Fast cold start with Vite
- Minimal JavaScript bundle
- Efficient DOM updates
- Smooth scrolling and animations
- Optimized for all devices

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
# Push dist/ to gh-pages branch
```

### Vercel

```bash
npm run build
# Deploy dist/ folder
```

### Netlify

```bash
npm run build
# Deploy dist/ folder
```

## 🔐 Privacy

- All progress stored locally in browser
- No backend server required
- No data sent to external services
- Complete privacy and offline support

## 📝 Adding Content

Edit `src/data/days.ts` to add or modify day content:

```typescript
const days: Record<number, DayData> = {
  1: {
    day: 1,
    week: 1,
    title: 'Day Title',
    description: 'Description',
    topics: ['Topic 1', 'Topic 2'],
    resources: [
      {
        title: 'Resource Title',
        url: 'https://...',
        duration: '15 min',
        type: 'video',
      },
    ],
    exercises: [
      {
        title: 'Exercise Title',
        difficulty: 'easy',
        url: 'https://leetcode.com/...',
        description: 'Description',
      },
    ],
  },
}
```

## 🐛 Troubleshooting

### Storage not persisting
- Check browser's IndexedDB is enabled
- Clear browser cache and try again
- Check browser console for errors

### Styles not loading
- Clear browser cache
- Rebuild with `npm run build`

### Tests failing
- Ensure dev server is running: `npm run dev`
- Clear test artifacts: `rm -rf test-results playwright-report`

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Support

For issues or questions, please open a GitHub issue.

---

**Status**: Production Ready  
**Last Updated**: February 2026
