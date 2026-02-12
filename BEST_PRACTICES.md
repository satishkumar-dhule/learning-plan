# Best Practices Guide

## Code Organization

### ✅ DO

**Keep components focused**
```typescript
// Good: Single responsibility
export async function renderSidebar(currentDay: number, onSelectDay: (day: number) => void) {
  // Only handles sidebar rendering
}
```

**Use type definitions**
```typescript
// Good: Clear types
interface DayData {
  day: number
  week: number
  title: string
}
```

**Separate concerns**
```
src/
├── components/  # UI only
├── data/        # Content only
├── storage/     # Persistence only
└── styles/      # Styling only
```

### ❌ DON'T

**Mix concerns**
```typescript
// Bad: Mixing UI, data, and storage
function renderDay() {
  const data = fetchFromAPI()
  const html = generateHTML(data)
  saveToStorage(data)
  document.body.innerHTML = html
}
```

**Create god components**
```typescript
// Bad: Too many responsibilities
function App() {
  // Renders sidebar, content, handles storage, manages state...
}
```

## TypeScript Usage

### ✅ DO

**Use strict types**
```typescript
// Good: Explicit types
function getDayData(day: number): DayData {
  return days[day]
}
```

**Define interfaces**
```typescript
// Good: Clear structure
interface Progress {
  currentDay: number
  completedDays: number[]
  lastUpdated: number
}
```

**Use type guards**
```typescript
// Good: Safe type checking
if (typeof day === 'number' && day > 0 && day <= 30) {
  // Safe to use day
}
```

### ❌ DON'T

**Use `any` type**
```typescript
// Bad: Defeats type safety
function getDayData(day: any): any {
  return days[day]
}
```

**Ignore TypeScript errors**
```typescript
// Bad: Hides problems
// @ts-ignore
const data = days[invalidDay]
```

## Storage Operations

### ✅ DO

**Use async/await**
```typescript
// Good: Clear async flow
async function loadProgress() {
  const progress = await getProgress()
  return progress
}
```

**Handle errors**
```typescript
// Good: Error handling
try {
  await updateProgress(data)
} catch (error) {
  console.error('Failed to save progress:', error)
}
```

**Use transactions**
```typescript
// Good: Atomic operations
const transaction = db.transaction(STORE_NAME, 'readwrite')
const store = transaction.objectStore(STORE_NAME)
```

### ❌ DON'T

**Use synchronous storage**
```typescript
// Bad: Blocks UI
const data = JSON.parse(localStorage.getItem('progress'))
```

**Ignore storage errors**
```typescript
// Bad: Silent failures
const progress = await getProgress() // What if it fails?
```

## DOM Manipulation

### ✅ DO

**Use semantic HTML**
```html
<!-- Good: Semantic structure -->
<nav class="sidebar">
  <h1>Navigation</h1>
  <ul class="day-list">
    <li><button>Day 1</button></li>
  </ul>
</nav>
```

**Use data attributes**
```html
<!-- Good: Data attributes for selection -->
<button data-day="1" class="day-button">Day 1</button>
```

**Use event delegation**
```typescript
// Good: Single listener for multiple elements
sidebar.querySelectorAll('.day-button').forEach((btn) => {
  btn.addEventListener('click', handleDayClick)
})
```

### ❌ DON'T

**Use inline styles**
```html
<!-- Bad: Inline styles -->
<div style="color: blue; font-size: 16px;">Content</div>
```

**Use innerHTML for user content**
```typescript
// Bad: XSS vulnerability
element.innerHTML = userContent
```

**Create memory leaks**
```typescript
// Bad: Event listener not removed
element.addEventListener('click', handler)
// Later: element removed but listener still in memory
```

## Styling

### ✅ DO

**Use CSS variables**
```css
/* Good: Reusable values */
:root {
  --color-blue: #3b82f6;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.button {
  background: var(--color-blue);
  box-shadow: var(--shadow-md);
}
```

**Use semantic class names**
```css
/* Good: Descriptive names */
.day-button { }
.progress-bar { }
.resource-card { }
```

**Use responsive design**
```css
/* Good: Mobile-first */
.sidebar {
  width: 100%;
}

@media (min-width: 768px) {
  .sidebar {
    width: 280px;
  }
}
```

### ❌ DON'T

**Use magic numbers**
```css
/* Bad: Unclear values */
.button {
  padding: 12px 24px;
  margin: 8px;
  border-radius: 4px;
}
```

**Use overly specific selectors**
```css
/* Bad: Too specific */
body > div#app > main > section > .content > .card > p {
  color: blue;
}
```

**Use !important**
```css
/* Bad: Breaks cascade */
.button {
  background: blue !important;
}
```

## Testing

### ✅ DO

**Test user interactions**
```typescript
// Good: Test what users do
test('should navigate to day 2 when clicking next', async ({ page }) => {
  await page.click('#next-btn')
  await expect(page.locator('h1')).toContainText('Day 2')
})
```

**Test persistence**
```typescript
// Good: Test data survives reload
test('should persist progress', async ({ page }) => {
  await page.click('#complete-btn')
  await page.reload()
  await expect(page.locator('#complete-btn')).toContainText('✓ Completed')
})
```

**Use descriptive test names**
```typescript
// Good: Clear test purpose
test('should mark day as complete and update progress bar', async ({ page }) => {
  // ...
})
```

### ❌ DON'T

**Test implementation details**
```typescript
// Bad: Tests internal state
test('should set currentDay to 2', async ({ page }) => {
  // Testing internal variable, not user-visible behavior
})
```

**Create flaky tests**
```typescript
// Bad: Timing issues
test('should load content', async ({ page }) => {
  await page.goto('/')
  // No wait for content to load
  await expect(page.locator('h1')).toBeVisible()
})
```

## Performance

### ✅ DO

**Minimize bundle size**
```typescript
// Good: Only import what you need
import { getDayData } from '@/data/days'
```

**Use efficient selectors**
```typescript
// Good: Specific selectors
document.getElementById('sidebar')
document.querySelector('.day-button[data-day="1"]')
```

**Batch DOM updates**
```typescript
// Good: Single update
const html = `<div>${content}</div>`
element.innerHTML = html
```

### ❌ DON'T

**Import entire libraries**
```typescript
// Bad: Imports everything
import * as utils from '@/utils'
```

**Use inefficient selectors**
```typescript
// Bad: Searches entire DOM
document.querySelectorAll('*')
```

**Update DOM in loops**
```typescript
// Bad: Multiple reflows
for (let i = 0; i < 100; i++) {
  element.innerHTML += `<div>${i}</div>`
}
```

## Error Handling

### ✅ DO

**Provide context**
```typescript
// Good: Helpful error messages
console.error('Failed to load day data:', { day, error })
```

**Handle edge cases**
```typescript
// Good: Handle invalid input
function getDayData(day: number): DayData {
  if (day < 1 || day > 30) {
    return createPlaceholderDay(day)
  }
  return days[day]
}
```

**Use try-catch for async**
```typescript
// Good: Catch async errors
try {
  await updateProgress(data)
} catch (error) {
  console.error('Storage error:', error)
}
```

### ❌ DON'T

**Silently fail**
```typescript
// Bad: No error handling
const data = await getProgress()
// What if it fails?
```

**Use generic errors**
```typescript
// Bad: Unclear error
console.error('Error')
```

## Documentation

### ✅ DO

**Document complex logic**
```typescript
// Good: Explain why, not what
// IndexedDB is used instead of localStorage because:
// 1. Larger storage quota (50MB+ vs 5MB)
// 2. Async API (non-blocking)
// 3. Better for structured data
async function initStorage(): Promise<void> {
  // ...
}
```

**Use JSDoc for public APIs**
```typescript
/**
 * Get progress data from storage
 * @returns Progress object with currentDay and completedDays
 */
export async function getProgress(): Promise<Progress> {
  // ...
}
```

**Keep README updated**
```markdown
# Project Name

## Features
- Feature 1
- Feature 2

## Getting Started
```

### ❌ DON'T

**Over-document obvious code**
```typescript
// Bad: Obvious comment
// Increment i
i++
```

**Let documentation get stale**
```typescript
// Bad: Outdated comment
// Uses localStorage (actually uses IndexedDB now)
```

## Git Practices

### ✅ DO

**Write clear commit messages**
```
✅ Good:
Add progress tracking with IndexedDB

- Implement IndexedDB storage layer
- Add getProgress and updateProgress functions
- Update UI to show progress bar
- Add tests for storage operations

❌ Bad:
fix stuff
update code
```

**Make atomic commits**
```
✅ Good: One feature per commit
- Commit 1: Add storage layer
- Commit 2: Add progress UI
- Commit 3: Add tests

❌ Bad: Multiple unrelated changes in one commit
```

## Code Review Checklist

- [ ] TypeScript types are correct
- [ ] No `any` types used
- [ ] Error handling is present
- [ ] Tests pass
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Code is readable
- [ ] Documentation is updated

## Performance Checklist

- [ ] Bundle size < 50KB
- [ ] Load time < 500ms
- [ ] No memory leaks
- [ ] Smooth animations (60fps)
- [ ] Responsive on mobile
- [ ] Storage operations are async

## Security Checklist

- [ ] No XSS vulnerabilities
- [ ] No sensitive data in localStorage
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] HTTPS in production

## Accessibility Checklist

- [ ] Semantic HTML used
- [ ] Color contrast WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text for images

## Deployment Checklist

- [ ] Tests pass
- [ ] No TypeScript errors
- [ ] Build succeeds
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Mobile responsive
- [ ] Links work
- [ ] Storage works

---

**Follow these practices to maintain code quality and project health!**
