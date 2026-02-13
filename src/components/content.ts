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

  // Flashcard quiz functionality
  if (dayData.checkpoint && dayData.checkpoint.length > 0) {
    initFlashcardQuiz(dayData.checkpoint)
  }

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

function initFlashcardQuiz(questions: any[]) {
  let currentIndex = 0
  let correctCount = 0
  let answered = false

  const showQuestion = (index: number) => {
    answered = false
    const question = questions[index]
    
    document.getElementById('current-question')!.textContent = (index + 1).toString()
    document.getElementById('question-text')!.textContent = question.question
    document.getElementById('flashcard-feedback')!.style.display = 'none'
    
    const optionsContainer = document.getElementById('flashcard-options')!
    optionsContainer.innerHTML = question.options.map((opt: string, idx: number) => `
      <button class="flashcard-option" data-answer="${idx}">
        ${opt}
      </button>
    `).join('')
    
    // Add click handlers to options
    optionsContainer.querySelectorAll('.flashcard-option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(btn as HTMLElement, question, index))
    })
  }

  const handleAnswer = (btn: HTMLElement, question: any, index: number) => {
    if (answered) return
    answered = true

    const selectedAnswer = parseInt(btn.dataset.answer!)
    const isCorrect = selectedAnswer === question.correct
    
    if (isCorrect) correctCount++

    // Highlight all options
    document.querySelectorAll('.flashcard-option').forEach((option, idx) => {
      const optBtn = option as HTMLElement
      optBtn.disabled = true
      if (idx === question.correct) {
        optBtn.classList.add('correct')
      } else if (idx === selectedAnswer && !isCorrect) {
        optBtn.classList.add('wrong')
      }
    })

    // Show feedback
    const feedback = document.getElementById('flashcard-feedback')!
    const result = document.getElementById('feedback-result')!
    const explanation = document.getElementById('feedback-explanation')!
    
    result.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect'
    result.className = `feedback-result ${isCorrect ? 'correct' : 'incorrect'}`
    explanation.textContent = question.explanation
    feedback.style.display = 'block'
  }

  document.getElementById('next-question')?.addEventListener('click', () => {
    currentIndex++
    if (currentIndex < questions.length) {
      showQuestion(currentIndex)
    } else {
      showResults()
    }
  })

  const showResults = () => {
    document.getElementById('flashcard')!.style.display = 'none'
    const complete = document.getElementById('quiz-complete')!
    const score = document.getElementById('final-score')!
    const percentage = Math.round((correctCount / questions.length) * 100)
    
    complete.style.display = 'block'
    score.innerHTML = `
      <div class="score-circle ${percentage >= 70 ? 'pass' : 'fail'}">
        <div class="score-number">${correctCount}/${questions.length}</div>
        <div class="score-percent">${percentage}%</div>
      </div>
      <p class="score-message">
        ${percentage >= 70 
          ? '🎉 Great job! You have a solid understanding of the material.' 
          : '📚 Keep studying! Review the material and try again.'}
      </p>
    `
  }

  document.getElementById('restart-quiz')?.addEventListener('click', () => {
    currentIndex = 0
    correctCount = 0
    document.getElementById('flashcard')!.style.display = 'block'
    document.getElementById('quiz-complete')!.style.display = 'none'
    showQuestion(0)
  })

  // Initialize first question
  showQuestion(0)
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
      <div class="checkpoint-header">
        <h2>📝 Knowledge Checkpoint</h2>
        <p class="checkpoint-intro">Test your understanding with these 10 questions</p>
      </div>
      <div class="flashcard-container" id="flashcard-container">
        <div class="flashcard-progress">
          <span id="current-question">1</span> / ${questions.length}
        </div>
        <div class="flashcard" id="flashcard">
          <div class="flashcard-question">
            <p id="question-text">${questions[0].question}</p>
          </div>
          <div class="flashcard-options" id="flashcard-options">
            ${questions[0].options.map((opt: string, idx: number) => `
              <button class="flashcard-option" data-answer="${idx}">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div class="flashcard-feedback" id="flashcard-feedback" style="display: none;">
            <div class="feedback-content">
              <p class="feedback-result" id="feedback-result"></p>
              <p class="feedback-explanation" id="feedback-explanation"></p>
              <button class="btn btn-primary" id="next-question">Next Question →</button>
            </div>
          </div>
        </div>
        <div class="quiz-complete" id="quiz-complete" style="display: none;">
          <div class="complete-content">
            <h3>🎉 Quiz Complete!</h3>
            <div class="final-score" id="final-score"></div>
            <button class="btn btn-primary" id="restart-quiz">Restart Quiz</button>
          </div>
        </div>
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
