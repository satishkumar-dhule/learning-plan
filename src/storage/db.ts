import { Progress } from './types'

const DB_NAME = 'SREGuide'
const STORE_NAME = 'progress'
let db: IDBDatabase | null = null

export async function initStorage(): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => {
      db = request.result
      resolve()
    }

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME)
      }
    }
  })
}

export async function getProgress(): Promise<Progress> {
  if (!db) throw new Error('Storage not initialized')
  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.get('progress')

    request.onerror = () => reject(request.error)
    request.onsuccess = () => {
      resolve(request.result || { currentDay: 1, completedDays: [], lastUpdated: Date.now() })
    }
  })
}

export async function updateProgress(updates: Partial<Progress>): Promise<void> {
  if (!db) throw new Error('Storage not initialized')
  const current = await getProgress()
  const updated = { ...current, ...updates, lastUpdated: Date.now() }

  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.put(updated, 'progress')

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve()
  })
}

export async function markDayComplete(day: number): Promise<void> {
  if (!db) throw new Error('Storage not initialized')
  const progress = await getProgress()
  const completed = new Set(progress.completedDays)
  completed.add(day)
  await updateProgress({ completedDays: Array.from(completed) })
}

export async function clearProgress(): Promise<void> {
  if (!db) throw new Error('Storage not initialized')
  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.clear()

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve()
  })
}
