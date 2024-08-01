import { useNotes } from 'hooks/useNotes'

export function generateNoteId() {
  return Math.round(Math.random() * 1000)
}
