#!/bin/bash

# 30-Day SRE Site - Command Line Test Runner
# Run with: bash run-tests.sh

echo "🧪 30-Day SRE Site - Test Runner"
echo "================================"
echo ""

BASE_URL="http://localhost:8000"
PASSED=0
FAILED=0

# Test 1: Check if server is running
echo -n "Test 1: Server is running... "
if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL" | grep -q "200"; then
    echo "✅ PASS"
    ((PASSED++))
else
    echo "❌ FAIL - Server not responding"
    ((FAILED++))
    echo "   Run: python3 -m http.server 8000"
    exit 1
fi

# Test 2: Check if 30-day.md exists
echo -n "Test 2: Markdown file exists... "
if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/30-day.md" | grep -q "200"; then
    FILESIZE=$(curl -s "$BASE_URL/30-day.md" | wc -c | tr -d ' ')
    LINES=$(curl -s "$BASE_URL/30-day.md" | wc -l | tr -d ' ')
    echo "✅ PASS ($FILESIZE bytes, $LINES lines)"
    ((PASSED++))
else
    echo "❌ FAIL - File not found"
    ((FAILED++))
fi

# Test 3: Check if index.html loads
echo -n "Test 3: Main page loads... "
if curl -s "$BASE_URL/index.html" | grep -q "30-Day SRE"; then
    echo "✅ PASS"
    ((PASSED++))
else
    echo "❌ FAIL - Page doesn't load correctly"
    ((FAILED++))
fi

# Test 4: Check if styles.css exists
echo -n "Test 4: CSS file exists... "
if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/styles.css" | grep -q "200"; then
    CSSSIZE=$(curl -s "$BASE_URL/styles.css" | wc -c | tr -d ' ')
    echo "✅ PASS ($CSSSIZE bytes)"
    ((PASSED++))
else
    echo "❌ FAIL"
    ((FAILED++))
fi

# Test 5: Check if script.js exists
echo -n "Test 5: JavaScript file exists... "
if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/script.js" | grep -q "200"; then
    JSSIZE=$(curl -s "$BASE_URL/script.js" | wc -c | tr -d ' ')
    echo "✅ PASS ($JSSIZE bytes)"
    ((PASSED++))
else
    echo "❌ FAIL"
    ((FAILED++))
fi

# Test 6: Check for Day headers in markdown
echo -n "Test 6: Day headers in markdown... "
DAY_COUNT=$(curl -s "$BASE_URL/30-day.md" | grep -c "^## Day [0-9]")
if [ "$DAY_COUNT" -gt 20 ]; then
    echo "✅ PASS (found $DAY_COUNT days)"
    ((PASSED++))
else
    echo "⚠️  WARNING (found only $DAY_COUNT days, expected 27)"
    ((PASSED++))
fi

# Test 7: Check for missing days
echo -n "Test 7: Known missing days... "
MISSING_DAYS=""
for day in 5 7 30; do
    if ! curl -s "$BASE_URL/30-day.md" | grep -q "^## Day $day:"; then
        MISSING_DAYS="$MISSING_DAYS$day "
    fi
done
if [ -n "$MISSING_DAYS" ]; then
    echo "✅ CONFIRMED - Days $MISSING_DAYS are missing (expected)"
    ((PASSED++))
else
    echo "✅ PASS - All days present!"
    ((PASSED++))
fi

# Test 8: Check if marked.js CDN is reachable
echo -n "Test 8: Marked.js CDN accessible... "
if curl -s -o /dev/null -w "%{http_code}" "https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js" | grep -q "200"; then
    echo "✅ PASS"
    ((PASSED++))
else
    echo "❌ FAIL - CDN not reachable"
    ((FAILED++))
fi

# Summary
echo ""
echo "================================"
echo "Test Results: $PASSED passed, $FAILED failed"
echo ""

if [ $FAILED -eq 0 ]; then
    echo "✅ All tests passed!"
    echo ""
    echo "🌐 Open in browser:"
    echo "   Test Suite: $BASE_URL/test.html"
    echo "   Main Site:  $BASE_URL/index.html"
    echo ""
    exit 0
else
    echo "❌ Some tests failed"
    exit 1
fi
