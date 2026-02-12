import { initApp } from '@/app'
import { initStorage } from '@/storage/db'

async function main() {
  try {
    await initStorage()
    await initApp()
  } catch (error) {
    console.error('Failed to initialize app:', error)
    document.body.innerHTML = '<p>Error loading application. Please refresh.</p>'
  }
}

main()
