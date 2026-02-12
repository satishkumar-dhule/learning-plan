import { test, expect } from '@playwright/test'

test.describe('30-Day SRE Guide', () => {
  test('should load app and display day 1', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check sidebar is visible
    const sidebar = page.locator('.sidebar')
    await expect(sidebar).toBeVisible()

    // Check day 1 is displayed (use more specific selector)
    await expect(page.locator('.day-header h1')).toContainText('Process Lifecycle & System Calls')
  })

  test('should navigate between days', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Click next button
    await page.click('#next-btn')
    await expect(page.locator('.day-header h1')).toContainText('Advanced I/O & The VFS Layer')

    // Click previous button
    await page.click('#prev-btn')
    await expect(page.locator('.day-header h1')).toContainText('Process Lifecycle & System Calls')
  })

  test('should display all day sections in sidebar', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check all 4 weeks are visible
    const weekTitles = page.locator('.week-title')
    await expect(weekTitles).toHaveCount(4)

    // Check day 1 is visible
    await expect(page.locator('button[data-day="1"]')).toBeVisible()
  })

  test('should display resources and exercises', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check resources section
    const resourcesSection = page.locator('text=Resources')
    await expect(resourcesSection).toBeVisible()

    // Check exercises section
    const exercisesSection = page.locator('text=Practice Exercises')
    await expect(exercisesSection).toBeVisible()

    // Check resource cards
    const resourceCards = page.locator('.resource-card')
    await expect(resourceCards).toHaveCount(3)
  })

  test('should show progress bar', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const progressBar = page.locator('.progress-bar')
    await expect(progressBar).toBeVisible()

    const progressFill = page.locator('.progress-fill')
    const width = await progressFill.evaluate((el) => window.getComputedStyle(el).width)
    expect(width).toBe('0px')
  })

  test('should select day from sidebar', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Click day 3 in sidebar
    await page.click('button[data-day="3"]')
    await expect(page.locator('.day-header h1')).toContainText('TCP Internals & Cloud Networking')
  })

  test('should handle reset progress', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Reset progress
    page.on('dialog', (dialog) => dialog.accept())
    await page.click('.reset-btn')

    // Wait for reload
    await page.waitForLoadState('networkidle')

    // Progress should be reset
    await expect(page.locator('.progress-text')).toContainText('0/30')
  })
})
