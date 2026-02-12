import { renderSidebar } from '@/components/sidebar'
import { renderContent } from '@/components/content'
import { getProgress, updateProgress } from '@/storage/db'
import { getDayData } from '@/data/days'

let currentDay = 1

export async function initApp() {
  const progress = await getProgress()
  currentDay = progress.currentDay || 1

  renderSidebar(currentDay, selectDay)
  await showDay(currentDay)
}

export async function selectDay(day: number) {
  currentDay = day
  await updateProgress({ currentDay: day })
  renderSidebar(currentDay, selectDay)
  await showDay(day)
}

async function showDay(day: number) {
  const dayData = getDayData(day)
  renderContent(dayData, currentDay, selectDay)
}
