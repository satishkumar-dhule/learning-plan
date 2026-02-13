export interface DayData {
  day: number
  week: number
  title: string
  description: string
  topics: string[]
  resources: Resource[]
  exercises: Exercise[]
  leetcode?: LeetCodeProblem[]
  checkpoint?: CheckpointQuestion[]
  genaiPrompt?: string
}

export interface Resource {
  title: string
  url: string
  duration: string
  type: 'video' | 'article' | 'docs' | 'interactive'
}

export interface Exercise {
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  url?: string
  description: string
  commands?: string[]
}

export interface LeetCodeProblem {
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  url: string
  description: string
}

export interface CheckpointQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

// Import JSON data with type assertion
import daysData from './days.json' with { type: 'json' }

export const days: Record<number, DayData> = daysData as Record<number, DayData>

export function getDayData(day: number): DayData {
  return days[day] || createPlaceholderDay(day)
}

function createPlaceholderDay(day: number): DayData {
  const week = Math.ceil(day / 7)
  return {
    day,
    week,
    title: `Day ${day}`,
    description: 'Content coming soon',
    topics: [],
    resources: [],
    exercises: [],
  }
}

export function getAllDays(): DayData[] {
  return Object.values(days).sort((a, b) => a.day - b.day)
}
