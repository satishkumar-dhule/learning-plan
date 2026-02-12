# 30-Day SRE Guide - Architecture Document

## Overview

This is a modern, state-of-the-art web application for SRE interview preparation. It prioritizes clarity, maintainability, and user experience with persistent progress tracking.

## Design Principles

1. **Modularity**: Clear separation of concerns (data, UI, storage, utilities)
2. **Type Safety**: Full TypeScript for compile-time error detection
3. **Performance**: Minimal bundle size, fast load times, smooth interactions
4. **Privacy**: All data stored locally in browser (no backend required)
5. **Accessibility**: Semantic HTML, proper color contrast, keyboard navigation
6. **Testability**: Comprehensive E2E tests with Playwright

## Architecture Layers

### 1. Data Layer (`src/data/`)

**Purpose**: Define and manage all content

**Files**:
- `days.ts` - Day definitions with topics, resources, exercises

**Key Interfaces**:
```typescript
interface DayData {
  day: number
  week: number
  title: string
  description: string
  topics: string[]
  resources: Resource[]
  exercises: Exercise[]
}
```

**Why This Matters**:
- Single source of truth for all content
- Easy to add/modify days without touching UI code
- Type-safe content structure

### 2. Storage Layer (`src/storage/`)

**Purpose**: Manage persistent progress tracking

**Files**:
- `db.ts` - IndexedDB operations

**Key Functions**:
- `initStorage()` - Initialize database
- `getProgress()` - Retrieve user progress
- `updateProgress()` - Save progress
- `markDayComplete()` - Mark day as done
- `clearProgress()` - Reset all progress

**Why IndexedDB?**
- Persistent storage (survives browser restart)
- Larger quota than localStorage (50MB+)
- Asynchronous API (non-blocking)
- Structured data support
- No backend required

**Data Structure**:
```typescript
interface Progress {
  currentDay: number
  completedDays: number[]
  lastUpdated: number
}
```

### 3. Component Layer (`src/components/`)

**Purpose**: Render UI and handle user interactions

**Files**:
- `sidebar.ts` - Navigation sidebar with progress
- `content.ts` - Day content display

**Sidebar Component**:
- Displays all 30 days organized by week
- Shows progress bar and completion count
- Highlights current day
- Shows checkmarks for completed days
- Handles day selection

**Content Component**:
- Displays day header with metadata
- Renders topics, resources, exercises
- Provides navigation buttons
- Handles day completion

**Why Vanilla Components?**
- No framework overhead
- Direct DOM manipulation
- Full control over rendering
- Smaller bundle size
- Easy to understand and modify

### 4. Application Layer (`src/app.ts`)

**Purpose**: Orchestrate app initialization and routing

**Key Functions**:
- `initApp()` - Initialize app on load
- `selectDay()` - Handle day selection
- `showDay()` - Display day content

**Flow**:
1. Load progress from storage
2. Render sidebar with current day
3. Display day content
4. Listen for user interactions
5. Update storage on changes

### 5. Styling Layer (`src/styles/`)

**Purpose**: Visual design and responsive layout

**Files**:
- `main.css` - All styles (no CSS-in-JS)

**Design System**:
- CSS variables for colors, shadows, spacing
- Grid layout for main structure
- Flexbox for components
- Mobile-first responsive design
- Smooth transitions and animations

**Color Scheme**:
- Week 1 (Blue): Systems & Networking
- Week 2 (Green): Kubernetes & IaC
- Week 3 (Purple): Observability & Security
- Week 4 (Orange): Architecture & Scale

## Data Flow

```
User Opens App
    ↓
initApp() called
    ↓
Load progress from IndexedDB
    ↓
Render sidebar with all days
    ↓
Display current day content
    ↓
User clicks day/button
    ↓
selectDay() called
    ↓
Update progress in IndexedDB
    ↓
Re-render sidebar + content
    ↓
User sees updated UI
```

## State Management

**Current State**:
- `currentDay` - Which day is displayed
- `completedDays` - Array of completed day numbers
- `lastUpdated` - Timestamp of last update

**State Persistence**:
- Automatically saved to IndexedDB
- Loaded on app initialization
- Updated on user actions

**No Global State Manager Needed**:
- Simple state (3 values)
- Infrequent updates
- Direct storage access

## Build & Deployment

### Development

```bash
npm run dev
```

- Vite dev server with HMR
- TypeScript compilation
- CSS processing
- Runs on http://localhost:5173

### Production Build

```bash
npm run build
```

- Minified JavaScript
- Optimized CSS
- Source maps for debugging
- Output in `dist/` folder

### Deployment Options

1. **GitHub Pages**: Push `dist/` to `gh-pages` branch
2. **Vercel**: Connect repo, auto-deploys on push
3. **Netlify**: Connect repo, auto-deploys on push
4. **Static Host**: Upload `dist/` folder

## Testing Strategy

### Test Coverage

- **E2E Tests**: Playwright tests in `tests/app.spec.ts`
- **Test Scenarios**:
  - App loads correctly
  - Navigation works
  - Progress tracking persists
  - UI updates on interactions
  - Storage operations work

### Running Tests

```bash
npm test                # Headless
npm run test:headed     # See browser
npm run test:ui         # Interactive UI
```

## Performance Optimizations

1. **Bundle Size**:
   - No heavy frameworks
   - Tree-shaking unused code
   - Minification in production

2. **Runtime Performance**:
   - Efficient DOM updates
   - CSS animations (GPU-accelerated)
   - Smooth scrolling
   - Lazy loading ready

3. **Storage Performance**:
   - IndexedDB for fast access
   - Minimal data structure
   - Async operations (non-blocking)

## Scalability

### Adding New Days

1. Edit `src/data/days.ts`
2. Add day object to `days` record
3. No UI changes needed

### Adding New Features

1. Create new component in `src/components/`
2. Add storage operations if needed
3. Update `src/app.ts` to use new component
4. Add tests in `tests/`

### Extending Storage

1. Add new fields to `Progress` interface
2. Update storage functions
3. Migrate existing data if needed

## Security Considerations

1. **No Backend**: No server-side vulnerabilities
2. **No External APIs**: No data leaks
3. **Local Storage Only**: User data never leaves browser
4. **No Authentication**: No login system to compromise
5. **No Cookies**: No tracking or analytics

## Accessibility

1. **Semantic HTML**: Proper heading hierarchy
2. **Color Contrast**: WCAG AA compliant
3. **Keyboard Navigation**: Tab through all elements
4. **Focus Indicators**: Clear focus states
5. **Responsive**: Works on all screen sizes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

1. **Offline Support**: Service Worker for offline access
2. **Export/Import**: Backup and restore progress
3. **Sharing**: Share progress with others
4. **Analytics**: Track learning patterns (local only)
5. **Dark Mode**: Theme toggle
6. **Mobile App**: React Native version
7. **Spaced Repetition**: Adaptive learning
8. **Quizzes**: Interactive assessments

## Maintenance

### Code Quality

- TypeScript for type safety
- ESLint for code style
- Prettier for formatting
- Pre-commit hooks recommended

### Monitoring

- Browser console for errors
- Test suite for regressions
- User feedback for improvements

### Updates

- Keep dependencies updated
- Monitor security advisories
- Test before deploying
- Maintain backward compatibility

## Conclusion

This architecture prioritizes:
- **Clarity**: Easy to understand and modify
- **Performance**: Fast and responsive
- **Privacy**: No data collection
- **Maintainability**: Clean code structure
- **Scalability**: Easy to extend

The modular design allows for easy feature additions while maintaining code quality and performance.
