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
        ${dayData.checkpoint && dayData.checkpoint.length > 0 ? renderCheckpoint(dayData.checkpoint) : ''}
        ${dayData.genaiPrompt ? renderGenAIPrompt(dayData.genaiPrompt) : ''}
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

  // Checkpoint quiz functionality
  document.getElementById('check-answers')?.addEventListener('click', () => {
    checkQuizAnswers(dayData.checkpoint || [])
  })

  // Copy GenAI prompt
  document.getElementById('copy-prompt')?.addEventListener('click', () => {
    const prompt = dayData.genaiPrompt || ''
    navigator.clipboard.writeText(prompt).then(() => {
      const btn = document.getElementById('copy-prompt')
      if (btn) {
        btn.textContent = '✓ Copied!'
        setTimeout(() => {
          btn.textContent = '📋 Copy Prompt'
        }, 2000)
      }
    })
  })
}

function checkQuizAnswers(questions: any[]) {
  let correct = 0
  questions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`) as HTMLInputElement
    const questionCard = document.querySelector(`[data-question="${idx}"]`)
    const feedback = questionCard?.querySelector('.answer-feedback') as HTMLElement
    
    if (selected) {
      const isCorrect = parseInt(selected.value) === q.correct
      if (isCorrect) correct++
      
      // Show feedback
      if (feedback) {
        feedback.style.display = 'block'
        feedback.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`
        
        // Highlight correct answer
        const options = questionCard?.querySelectorAll('.option-label')
        options?.forEach((opt, optIdx) => {
          if (optIdx === q.correct) {
            opt.classList.add('correct-answer')
          }
          if (parseInt(selected.value) === optIdx && !isCorrect) {
            opt.classList.add('wrong-answer')
          }
        })
      }
    }
  })
  
  // Show results
  const results = document.getElementById('quiz-results')
  if (results) {
    const percentage = Math.round((correct / questions.length) * 100)
    results.style.display = 'block'
    results.innerHTML = `
      <div class="quiz-score ${percentage >= 70 ? 'pass' : 'fail'}">
        <h3>Your Score: ${correct}/${questions.length} (${percentage}%)</h3>
        <p>${percentage >= 70 ? '🎉 Great job! You\'re ready to move on.' : '📚 Review the material and try again.'}</p>
      </div>
    `
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
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
            ${e.commands && e.commands.length > 0 ? `
              <details class="commands-section">
                <summary>Show Commands</summary>
                <pre><code>${e.commands.join('\n')}</code></pre>
              </details>
            ` : ''}
            ${e.url ? `<a href="${e.url}" target="_blank" rel="noopener noreferrer" class="exercise-link">Solve →</a>` : ''}
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `
}

function renderCheckpoint(questions: any[]): string {
  return `
    <section class="section checkpoint-section">
      <h2>📝 Knowledge Checkpoint</h2>
      <p class="checkpoint-intro">Test your understanding with these 10 questions:</p>
      <div class="checkpoint-quiz" id="checkpoint-quiz">
        ${questions.map((q, idx) => `
          <div class="question-card" data-question="${idx}">
            <div class="question-header">
              <span class="question-number">Question ${idx + 1}</span>
            </div>
            <p class="question-text">${q.question}</p>
            <div class="options-list">
              ${q.options.map((opt: string, optIdx: number) => `
                <label class="option-label">
                  <input type="radio" name="q${idx}" value="${optIdx}" />
                  <span class="option-text">${opt}</span>
                </label>
              `).join('')}
            </div>
            <div class="answer-feedback" style="display: none;">
              <p class="explanation">${q.explanation}</p>
            </div>
          </div>
        `).join('')}
        <button class="btn btn-primary" id="check-answers">Check Answers</button>
        <div class="quiz-results" id="quiz-results" style="display: none;"></div>
      </div>
    </section>
  `
}

function renderGenAIPrompt(prompt: string): string {
  return `
    <section class="section genai-section">
      <h2>🤖 Generate Your Study Plan</h2>
      <p class="genai-intro">Copy this prompt to ChatGPT, Gemini, or Claude to generate a detailed 8-hour study schedule:</p>
      <div class="genai-prompt-box">
        <pre class="genai-prompt">${prompt}</pre>
        <button class="btn btn-secondary copy-prompt-btn" id="copy-prompt">
          📋 Copy Prompt
        </button>
      </div>
    </section>
  `
}
