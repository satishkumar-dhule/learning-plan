# Project Structure Guide

## Directory Layout

```
30-day-sre-guide/
│
├── src/                          # Source code
│   ├── main.ts                   # Application entry point
│   ├── app.ts                    # App initialization & routing
│   ├── index.html                # HTML template
│   │
│   ├── components/               # UI Components
│   │   ├── sidebar.ts            # Navigation sidebar
│   │   └── content.ts            # Day content display
│   │
│   ├── data/                     # Content & Data
│   │   └── days.ts               # Day definitions (topics, resources, exercises)
│   │
│   ├── storage/                  # Data Persistence
│   │   └── db.ts                 # IndexedDB operations
│   │
│   └── styles/                   # Styling
│       └── main.css              # Global styles & layout
│
├── tests/                        # Test Suite
│   └── app.spec.ts               # E2E tests (Playwright)
│
├── dist/                         # Production build (generated)
│   ├── index.html
│   ├── main.js
│   └── styles/
│       └── main.css
│
├── node_modules/                 # Dependencies (generated)
│
├── Configuration Files
│   ├── package.json              # Project metadata & scripts
│   ├── package-lock.json         # Dependency lock file
│   ├── tsconfig.json             # TypeScript configuration
│   ├── vite.config.ts            # Vite build configuration
│   ├── playwright.config.ts      # Playwright test configuration
│   └── .gitignore                # Git ignore rules
│
└── Documentation
    ├── README.md                 # User guide & features
    ├── ARCHITECTURE.md           # Technical design document
    ├── SETUP.md                  # Installation & development guide
    ├── PROJECT_STRUCTURE.md      # This file
    └── REARCHITECTURE_SUMMARY.md # What changed & why
```

## File Descriptions

### Source Code (`src/`)

#### `main.ts`
- **Purpose**: Application entry point
- **Responsibilities**:
  - Initialize storage
  - Start the app
  - Handle initialization errors
- **Size**: ~15 lines

#### `app.ts`
- **Purpose**: App orchestration and routing
- **Responsibilities**:
  - Load user progress
  - Render sidebar and content
  - Handle day selection
  - Update storage on changes
- **Size**: ~30 lines

#### `index.html`
- **Purpose**: HTML template
- **Contains**:
  - Meta tags
  - Root div for app
  - Script and style references
- **Size**: ~15 lines

### Components (`src/components/`)

#### `sidebar.ts`
- **Purpose**: Navigation sidebar UI
- **Responsibilities**:
  - Display all 30 days organized by week
  - Show progress bar and completion count
  - Highlight current day
  - Handle day selection
  - Provide reset button
- **Size**: ~80 lines
- **Exports**: `renderSidebar()`

#### `content.ts`
- **Purpose**: Day content display
- **Responsibilities**:
  - Display day header with metadata
  - Render topics list
  - Render resources grid
  - Render exercises list
  - Handle navigation buttons
  - Handle day completion
- **Size**: ~120 lines
- **Exports**: `renderContent()`

### Data (`src/data/`)

#### `days.ts`
- **Purpose**: Content definitions
- **Contains**:
  - Day data for all 30 days
  - Type definitions (DayData, Resource, Exercise)
  - Helper functions
- **Size**: ~200 lines
- **Exports**: `getDayData()`, `getAllDays()`

**Data Structure**:
```typescript
{
  day: 1,
  week: 1,
  title: "Process Lifecycle & System Calls",
  description: "...",
  topics: ["fork() vs clone()", ...],
  resources: [{title, url, duration, type}, ...],
  exercises: [{title, difficulty, url, description}, ...]
}
```

### Storage (`src/storage/`)

#### `db.ts`
- **Purpose**: IndexedDB operations
- **Responsibilities**:
  - Initialize database
  - Get/update progress
  - Mark days complete
  - Clear progress
- **Size**: ~100 lines
- **Exports**: 
  - `initStorage()`
  - `getProgress()`
  - `updateProgress()`
  - `markDayComplete()`
  - `clearProgress()`

**Data Structure**:
```typescript
{
  currentDay: 1,
  completedDays: [1, 2, 3],
  lastUpdated: 1707000000000
}
```

### Styles (`src/styles/`)

#### `main.css`
- **Purpose**: All styling
- **Contains**:
  - CSS variables (colors, shadows, spacing)
  - Layout (grid, flexbox)
  - Components (sidebar, content, buttons)
  - Responsive design
  - Animations and transitions
- **Size**: ~600 lines
- **Organization**:
  - Root variables
  - Base styles
  - Sidebar styles
  - Content styles
  - Component styles
  - Responsive media queries

### Tests (`tests/`)

#### `app.spec.ts`
- **Purpose**: E2E tests
- **Test Scenarios**:
  - App loads correctly
  - Navigation works
  - Progress tracking persists
  - UI updates on interactions
  - Storage operations work
- **Size**: ~200 lines
- **Framework**: Playwright

### Configuration Files

#### `package.json`
- **Purpose**: Project metadata and scripts
- **Contains**:
  - Project name, version, description
  - npm scripts (dev, build, test, etc.)
  - Dependencies and devDependencies
- **Key Scripts**:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm test` - Run tests
  - `npm run type-check` - Check TypeScript

#### `tsconfig.json`
- **Purpose**: TypeScript configuration
- **Contains**:
  - Compiler options
  - Target (ES2020)
  - Module system (ESNext)
  - Path aliases (@/*)
  - Strict mode enabled

#### `vite.config.ts`
- **Purpose**: Vite build configuration
- **Contains**:
  - Root directory (src/)
  - Build output (dist/)
  - Dev server settings
  - Path aliases

#### `playwright.config.ts`
- **Purpose**: Playwright test configuration
- **Contains**:
  - Test directory
  - Browser configurations
  - Base URL
  - Web server settings

## Code Statistics

| Category | Files | Lines | Purpose |
|----------|-------|-------|---------|
| Components | 2 | 200 | UI rendering |
| Data | 1 | 200 | Content definitions |
| Storage | 1 | 100 | Data persistence |
| Styles | 1 | 600 | Visual design |
| Tests | 1 | 200 | E2E testing |
| Config | 4 | 100 | Build & test config |
| **Total** | **10** | **1,400** | **Complete app** |

## Data Flow Diagram

```
User Opens App
    ↓
main.ts (entry point)
    ↓
app.ts (initialize)
    ↓
storage/db.ts (load progress)
    ↓
components/sidebar.ts (render navigation)
    ↓
data/days.ts (get day content)
    ↓
components/content.ts (render content)
    ↓
styles/main.css (apply styling)
    ↓
User sees app
    ↓
User clicks day
    ↓
app.ts (selectDay)
    ↓
storage/db.ts (update progress)
    ↓
components/sidebar.ts (re-render)
    ↓
components/content.ts (re-render)
    ↓
User sees updated content
```

## Module Dependencies

```
main.ts
  └── app.ts
      ├── components/sidebar.ts
      │   └── storage/db.ts
      ├── components/content.ts
      │   ├── data/days.ts
      │   └── storage/db.ts
      └── data/days.ts

styles/main.css (imported in index.html)
```

## Adding New Features

### Add a New Day

1. Edit `src/data/days.ts`
2. Add day object to `days` record
3. No other changes needed

### Add a New Component

1. Create `src/components/newComponent.ts`
2. Export render function
3. Import in `src/app.ts`
4. Call in appropriate place

### Add New Storage Fields

1. Update `Progress` interface in `src/storage/db.ts`
2. Update storage functions
3. Handle migration if needed

### Add New Styles

1. Edit `src/styles/main.css`
2. Use CSS variables for consistency
3. Follow existing organization

### Add New Tests

1. Create test in `tests/app.spec.ts`
2. Use Playwright API
3. Run with `npm test`

## Build Output

After `npm run build`, `dist/` contains:

```
dist/
├── index.html          # Minified HTML
├── main.js             # Minified JavaScript
├── main.js.map         # Source map for debugging
└── styles/
    ├── main.css        # Minified CSS
    └── main.css.map    # Source map for debugging
```

## Development Workflow

1. **Edit Code**: Make changes in `src/`
2. **HMR**: Browser auto-refreshes
3. **Type Check**: TypeScript catches errors
4. **Test**: Run `npm test` to verify
5. **Build**: `npm run build` for production
6. **Deploy**: Push `dist/` to hosting

## Performance Considerations

- **Bundle Size**: ~25KB (minified)
- **Load Time**: ~200ms
- **Runtime**: Smooth 60fps animations
- **Storage**: IndexedDB (50MB+ available)

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Maintenance

- Keep dependencies updated
- Run tests before deploying
- Monitor browser console for errors
- Update documentation when adding features

---

**This structure is designed for clarity, maintainability, and scalability.**
