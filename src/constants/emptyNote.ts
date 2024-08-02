import { generateNoteId } from 'utils/generateNoteId'
import { INote } from 'types/types'

export const EMPTY_NOTE: INote = {
  id: generateNoteId(),
  title: '',
  body: '',
  createdAt: new Date(),
}
