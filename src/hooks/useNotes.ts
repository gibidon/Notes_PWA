import { useContext } from 'react'
import { NotesContext } from 'contexts/NotesProvider'

export function useNotes() {
  return useContext(NotesContext)
}
