# UI Tests - 30-Day SRE Site

Comprehensive Playwright tests for the 30-Day SRE static site.

## Test Structure

```
tests/
├── 01-page-load.spec.js       # Page loading, resources, console checks
├── 02-navigation.spec.js      # Navigation functionality, scrolling, links
├── 03-search.spec.js          # Search filtering and functionality
├── 04-mobile.spec.js          # Mobile responsiveness and touch interactions
└── 05-content-rendering.spec.js # Content rendering, styling, accessibility
```

## Running Tests

### Prerequisites

```bash
# Install dependencies
npm install

# Install Chromium browser
npm run install-browsers
```

### Run All Tests

```bash
# Headless mode (default)
npm test

# Headed mode (see browser)
npm test:headed

# Debug mode
npm test:debug

# Interactive UI mode
npm test:ui
```

### Run Specific Tests

```bash
# Run only page load tests
npx playwright test 01-page-load

# Run only mobile tests
npx playwright test 04-mobile

# Run tests matching a pattern
npx playwright test navigation
```

### Run on Different Browsers

```bash
# Chromium only
npx playwright test --project=chromium

# Mobile Chrome emulation
npx playwright test --project=mobile-chrome
```

## Test Configuration

Tests run on port **8001** (different from dev server on 8000).

The web server starts automatically when tests run.

## Test Coverage

### Page Load (01-page-load.spec.js)
- ✅ Page loads successfully
- ✅ All resources load (CSS, JS, markdown, CDN)
- ✅ Markdown parses correctly
- ✅ Missing days warning shows
- ✅ Navigation rebuilds successfully
- ✅ No console errors

### Navigation (02-navigation.spec.js)
- ✅ All navigation sections display
- ✅ Day links are clickable
- ✅ Clicking scrolls to content
- ✅ Active section highlights
- ✅ Missing day placeholders show
- ✅ Placeholders don't respond to clicks
- ✅ Can navigate between days
- ✅ Direct URL hash navigation works
- ✅ Back to top button appears
- ✅ Back to top scrolls to top
- ✅ Scroll progress updates

### Search (03-search.spec.js)
- ✅ Search box displays
- ✅ Typing filters items
- ✅ Specific searches work (e.g., "etcd" → Day 8)
- ✅ Search is case-insensitive
- ✅ Clearing search shows all items
- ✅ Sections hide when no matches
- ✅ Filters both real and placeholder items
- ✅ Handles no results gracefully
- ✅ Searches immediately on input

### Mobile (04-mobile.spec.js)
- ✅ Hamburger menu shows on mobile
- ✅ Menu opens on click
- ✅ Menu closes on second click
- ✅ Menu closes when clicking a link
- ✅ Menu closes when clicking outside
- ✅ Text is readable on mobile
- ✅ Touch targets are adequate (44x44px)
- ✅ Back to top button works on mobile
- ✅ No horizontal scroll
- ✅ Content stacks properly
- ✅ Tablet responsiveness works

### Content Rendering (05-content-rendering.spec.js)
- ✅ Markdown headers render correctly
- ✅ Code blocks have proper styling
- ✅ Inline code styled differently
- ✅ Links render and work
- ✅ Lists render properly
- ✅ Emojis display correctly
- ✅ Proper spacing between sections
- ✅ Callout boxes render
- ✅ Line height is readable (1.5+)
- ✅ Color contrast is sufficient
- ✅ Tables render if present
- ✅ No raw markdown syntax visible
- ✅ Blockquotes styled properly
- ✅ Heading hierarchy is correct

## Test Results

Tests generate multiple reports:

- **HTML Report**: `playwright-report/index.html`
- **JSON Report**: `test-results/results.json`
- **Console Output**: Real-time during test run

### View HTML Report

```bash
npx playwright show-report
```

## Screenshots and Videos

- **Screenshots**: Captured on test failure
- **Videos**: Recorded when tests fail
- **Traces**: Available for debugging failures

All saved in `test-results/` directory.

## Debugging Failed Tests

### Interactive Mode

```bash
npm run test:ui
```

### Debug Specific Test

```bash
npx playwright test --debug 02-navigation
```

### View Trace

```bash
npx playwright show-trace test-results/trace.zip
```

## CI/CD Integration

Tests are configured for CI with:
- Automatic retries on failure (2x)
- Single worker (no parallel tests)
- JSON and HTML reports

### GitHub Actions Example

```yaml
name: UI Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npx playwright install --with-deps chromium
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Performance Benchmarks

Expected test execution times:

- Page Load Tests: ~10-15 seconds
- Navigation Tests: ~30-40 seconds
- Search Tests: ~20-25 seconds
- Mobile Tests: ~25-30 seconds
- Content Tests: ~20-25 seconds

**Total Suite**: ~2-3 minutes

## Known Issues & Limitations

1. **Missing Days**: Days 5, 7, 30 are intentionally missing - tests expect this
2. **Appendix Section**: Currently empty - tests skip if no items
3. **Font Loading**: May cause slight timing differences
4. **Animation Timing**: Tests include wait times for smooth scroll animations

## Adding New Tests

### Template

```javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Your Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500); // Wait for navigation rebuild
  });

  test('should do something', async ({ page }) => {
    // Your test code
    const element = page.locator('.your-selector');
    await expect(element).toBeVisible();
  });
});
```

## Troubleshooting

### Tests Fail to Start

```bash
# Check port 8001 is free
lsof -ti:8001 | xargs kill -9

# Restart tests
npm test
```

### Browser Not Found

```bash
# Reinstall browsers
npx playwright install chromium --with-deps
```

### Slow Tests

```bash
# Run in parallel (faster but less reliable)
npx playwright test --workers=4
```

### Timeout Errors

Increase timeout in `playwright.config.js`:

```javascript
use: {
  actionTimeout: 30000, // 30 seconds
}
```

## Best Practices

1. **Wait for Navigation**: Always wait 500ms after page load for dynamic navigation rebuild
2. **Use Locators**: Prefer `.locator()` over `.querySelector()`
3. **Expect Visible**: Use `.toBeVisible()` to ensure elements are rendered
4. **Handle Timing**: Use `.waitForTimeout()` for animations
5. **Clean URLs**: Use base URL from config, not hardcoded
6. **Test Independence**: Each test should be independent
7. **Meaningful Assertions**: Test behavior, not implementation

## Resources

- [Playwright Docs](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-test)

---

**Created**: February 2026
**Test Framework**: Playwright 1.40+
**Browsers**: Chromium (Desktop + Mobile)
