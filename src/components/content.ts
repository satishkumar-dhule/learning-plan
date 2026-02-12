import { DayData } from '@/data/days'
import { markDayComplete, getProgress } from '@/storage/db'

export async function renderContent(
  dayData: DayData,
  currentDay: number,
  onSelectDay: (day: number) => void
) {
  const content = document.getElementById('content')!
  const progress = await getProgress()
  const isCompleted = progress.completedDays.includes(dayData.day)

  const week = Math.ceil(dayData.day / 7)
  const weekColors = ['blue', 'green', 'purple', 'orange']
  const weekColor = weekColors[week - 1]

  content.innerHTML = `
    <div class="content-wrapper">
      <div class="day-header week-${weekColor}">
        <div class="day-meta">
          <span class="day-badge">Day ${dayData.day}</span>
          <span class="week-badge">Week ${week}</span>
        </div>
        <h1>${dayData.title}</h1>
        <p class="day-description">${dayData.description}</p>
      </div>

      <div class="day-content">
        ${dayData.topics.length > 0 ? renderTopics(dayData.topics) : ''}
        ${dayData.resources.length > 0 ? renderResources(dayData.resources) : ''}
        ${dayData.exercises.length > 0 ? renderExercises(dayData.exercises) : ''}
      </div>

      <div class="day-actions">
        <div class="nav-buttons">
          ${dayData.day > 1 ? `<button class="btn btn-secondary" id="prev-btn" aria-label="Previous day">← Previous</button>` : ''}
          ${dayData.day < 30 ? `<button class="btn btn-secondary" id="next-btn" aria-label="Next day">Next →</button>` : ''}
        </div>
        <button class="btn ${isCompleted ? 'btn-completed' : 'btn-primary'}" id="complete-btn" type="button">
          ${isCompleted ? '✓ Completed' : 'Mark Complete'}
        </button>
      </div>
    </div>
  `

  // Event listeners
  document.getElementById('prev-btn')?.addEventListener('click', () => {
    onSelectDay(dayData.day - 1)
    window.scrollTo(0, 0)
  })

  document.getElementById('next-btn')?.addEventListener('click', () => {
    onSelectDay(dayData.day + 1)
    window.scrollTo(0, 0)
  })

  document.getElementById('complete-btn')?.addEventListener('click', async () => {
    if (!isCompleted) {
      await markDayComplete(dayData.day)
      renderContent(dayData, currentDay, onSelectDay)
    }
  })
}

function renderTopics(topics: string[]): string {
  return `
    <section class="section">
      <h2>Topics</h2>
      <ul class="topics-list">
        ${topics.map((topic) => `<li>${topic}</li>`).join('')}
      </ul>
    </section>
  `
}

function renderResources(resources: any[]): string {
  return `
    <section class="section">
      <h2>Resources</h2>
      <div class="resources-grid">
        ${resources
          .map(
            (r) => `
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-card resource-${r.type}" aria-label="${r.title}">
            <div class="resource-type">${r.type}</div>
            <h3>${r.title}</h3>
            <span class="resource-duration">⏱ ${r.duration}</span>
          </a>
        `
          )
          .join('')}
      </div>
    </section>
  `
}

function renderExercises(exercises: any[]): string {
  return `
    <section class="section">
      <h2>Practice Exercises</h2>
      <div class="exercises-list">
        ${exercises
          .map(
            (e) => `
          <div class="exercise-card exercise-${e.difficulty}">
            <div class="exercise-header">
              <h3>${e.title}</h3>
              <span class="difficulty-badge">${e.difficulty}</span>
            </div>
            <p>${e.description}</p>
            ${e.url ? `<a href="${e.url}" target="_blank" rel="noopener noreferrer" class="exercise-link">Solve →</a>` : ''}
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `
}
