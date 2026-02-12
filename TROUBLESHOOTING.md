# Troubleshooting Guide - 30-Day SRE Site

## Quick Diagnosis

### Step 1: Run the Test Suite
Open: **http://localhost:8000/test.html**

This will automatically test:
- ✅ If 30-day.md loads correctly
- ✅ If marked.js is working
- ✅ If markdown parsing generates IDs
- ✅ Which days are found/missing
- ✅ If navigation can be built

### Step 2: Check Browser Console
1. Open the main site: http://localhost:8000
2. Press F12 (or Cmd+Option+I on Mac)
3. Go to "Console" tab
4. Look for these messages:

**Expected (Good):**
```
Found 200+ headers total
First 5 headers: [array of headers with IDs]
Building navigation with 27+ total items
✅ Navigation rebuilt successfully
```

**Problem Signs:**
```
❌ Found 0 headers total
❌ No items found! Check if headers have IDs.
```

## Common Issues & Fixes

### Issue 1: "No items found" or Empty Navigation

**Cause**: Headers don't have IDs, or marked.js isn't generating them.

**Fixes**:
1. Hard refresh the page: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Check that marked.js loaded (Console should show no 404 errors)
4. Verify the timeout is working (script waits 100ms for marked.js)

**Quick Test**:
```javascript
// Paste in browser console:
document.querySelectorAll('h2').length  // Should show 100+
document.querySelectorAll('h2[id]').length  // Should show same number
```

### Issue 2: Links Don't Work

**Cause**: Click handlers not attached after dynamic rebuild.

**Fix**: This should be fixed now. Each link gets its handler when created in `rebuildNavSection()`.

**Test**: Click any day in sidebar - should smoothly scroll to content.

### Issue 3: Missing Days Shown

**Status**: **This is expected!** Days 5, 7, and 30 are missing from your markdown.

**What you'll see**:
- Grayed out items: "Day 5: (Not in markdown)"
- Warning banner at top of page
- Console warning: "⚠️ Missing days in markdown: 5, 7, 30"

**To fix**: Add these sections to your 30-day.md file.

### Issue 4: Search Not Working

**Cause**: Search filters the original hardcoded HTML, not dynamic items.

**Test**: Type "Day 1" in search box - should show only Day 1.

**If broken**: Check console for JavaScript errors.

### Issue 5: Mobile Menu Not Opening

**Cause**: Click handler not attached or CSS issue.

**Test**:
1. Resize browser to < 1024px width
2. Hamburger menu (☰) should appear
3. Click it - sidebar should slide in

**Fix**: Hard refresh the page.

## Debug Commands

Run these in the browser console (F12):

### Check if content loaded:
```javascript
document.querySelectorAll('h1, h2, h3').length
```
Should show 200+

### Check if IDs exist:
```javascript
Array.from(document.querySelectorAll('h2')).slice(0, 5).map(h => ({
  id: h.id,
  text: h.textContent.substring(0, 40)
}))
```
All headers should have `id` values

### Check navigation items:
```javascript
document.querySelectorAll('.nav-section a').length
```
Should show 27+ (all days that exist + setup sections)

### Check for errors:
```javascript
// Look for any red errors in console
// Especially 404s for missing files
```

### Trigger navigation rebuild:
```javascript
rebuildNavigation()
```
Should rebuild and log to console

## Server Issues

### Port Already in Use:
```bash
# Kill existing server
pkill -f "python3 -m http.server"

# Start fresh
python3 -m http.server 8000
```

### CORS Errors:
File protocol (`file://`) won't work. Always use a server:
```bash
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## Performance Issues

### Slow Loading:
- First load: ~500ms (includes CDN fetch for marked.js)
- Subsequent: ~50ms (cached)

### Slow Scrolling:
Check Chrome DevTools → Performance tab for bottlenecks.

### Memory Issues:
Your markdown file is large (6800+ lines). This is fine, but initial parse takes ~100-200ms.

## Validation Checklist

Run through this checklist:

- [ ] Server running: `http://localhost:8000` works
- [ ] Test page passes all tests: `http://localhost:8000/test.html`
- [ ] Main page loads: `http://localhost:8000/index.html`
- [ ] Console shows "✅ Navigation rebuilt successfully"
- [ ] Sidebar shows all weeks with day numbers
- [ ] Clicking Day 1 scrolls to Day 1 content
- [ ] Search works: typing "etcd" shows only Day 8
- [ ] Mobile menu works: resize and click hamburger
- [ ] Warning banner shows for missing days 5, 7, 30
- [ ] Active section highlights in blue as you scroll
- [ ] Back-to-top button appears when scrolling down
- [ ] Scroll progress shows percentage at bottom

## Still Broken?

### Check These Files:
1. `/Users/sdhule/learn/index.html` - Main HTML
2. `/Users/sdhule/learn/styles.css` - All styling
3. `/Users/sdhule/learn/script.js` - Navigation logic
4. `/Users/sdhule/learn/30-day.md` - Content source

### Compare Checksums:
```bash
cd /Users/sdhule/learn
md5 index.html styles.css script.js 30-day.md
```

### Check File Sizes:
```bash
ls -lh index.html styles.css script.js 30-day.md
```

Expected sizes:
- index.html: ~5-6 KB
- styles.css: ~11-12 KB
- script.js: ~13-14 KB
- 30-day.md: ~440 KB

### Nuclear Option - Hard Reset:
```bash
# Backup first!
cp -r /Users/sdhule/learn /Users/sdhule/learn-backup

# Clear browser cache completely
# Chrome: Settings → Privacy → Clear browsing data → Cached images

# Hard refresh
# Mac: Cmd+Shift+R
# Windows: Ctrl+Shift+R
```

## Getting Help

If still broken, check:
1. Browser console for errors (F12 → Console)
2. Network tab for 404s (F12 → Network)
3. Test page results (test.html)

Include this info when asking for help:
- Browser version
- Console errors (screenshot)
- Test page results (screenshot)
- Output of `ls -lh *.html *.css *.js *.md`

## Success Criteria

You'll know it's working when:
1. ✅ Test page shows all green checks
2. ✅ Main site shows all days in sidebar
3. ✅ Clicking days scrolls smoothly
4. ✅ No errors in console
5. ✅ Search filters correctly
6. ✅ Mobile menu works

---

**Created**: February 2026
**Last Updated**: After fixing navigation rebuild issues
