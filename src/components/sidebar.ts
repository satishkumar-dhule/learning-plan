import { getAllDays } from '@/data/days'
import { getProgress } from '@/storage/db'

export async function renderSidebar(currentDay: number, onSelectDay: (day: number) => void) {
  const sidebar = document.getElementById('sidebar')!
  const progress = await getProgress()
  const days = getAllDays()

  const weeks = [
    { num: 1, title: 'Systems & Networking', color: 'blue' },
    { num: 2, title: 'Kubernetes & IaC', color: 'green' },
    { num: 3, title: 'Observability & Security', color: 'purple' },
    { num: 4, title: 'Architecture & Scale', color: 'orange' },
  ]

  const totalDays = days.length
  const completedCount = progress.completedDays.length
  const progressPercent = (completedCount / totalDays) * 100

  sidebar.innerHTML = `
    <div class="sidebar">
      <div class="sidebar-header">
        <h1>30-Day SRE</h1>
        <div class="progress-badge">
          <div class="progress-info">
            <span class="progress-text">${completedCount}/${totalDays} Complete</span>
            <span class="progress-percent">${Math.round(progressPercent)}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${weeks
          .map(
            (week) => `
          <div class="week-section">
            <h3 class="week-title week-${week.color}">Week ${week.num}: ${week.title}</h3>
            <ul class="day-list">
              ${days
                .filter((d) => d.week === week.num)
                .map(
                  (day) => `
                <li class="day-item ${day.day === currentDay ? 'active' : ''} ${progress.completedDays.includes(day.day) ? 'completed' : ''}">
                  <button class="day-button" data-day="${day.day}" aria-label="Day ${day.day}: ${day.title}">
                    <span class="day-number">Day ${day.day}</span>
                    <span class="day-title">${day.title}</span>
                    ${progress.completedDays.includes(day.day) ? '<span class="checkmark">✓</span>' : ''}
                  </button>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>
        `
          )
          .join('')}
      </nav>

      <div class="sidebar-footer">
        <button class="reset-btn" id="reset-progress" type="button">Reset Progress</button>
      </div>
    </div>
  `

  // Event listeners - only navigate, don't mark complete
  sidebar.querySelectorAll('.day-button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const day = parseInt((e.currentTarget as HTMLElement).dataset.day!)
      onSelectDay(day)
    })
  })

  document.getElementById('reset-progress')?.addEventListener('click', async () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      const { clearProgress } = await import('@/storage/db')
      await clearProgress()
      location.reload()
    }
  })
}
