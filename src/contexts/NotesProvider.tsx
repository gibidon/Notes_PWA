import { createContext, useState } from 'react'
import { INote } from 'types/types'

interface NotesProviderProps {
  children: React.ReactNode
}

export interface INotesContext {
  notes: Array<INote>
  activeNoteId: number
  setActiveNoteId: (id: number) => void
  addNote: (note: INote) => void
  deleteNote: (id: number) => void
  editNote: (id: number, note: INote) => void
  isAdding: boolean
  setIsAdding: (isAdding: boolean) => void
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
}

const initialNotes: Array<INote> = [
  {
    id: 0,
    title: 'note 0',
    body: ' 0 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem, amet et molestiae nulla accusantium doloribus officia harum dicta corrupti? Aperiam, facere. Deleniti, alias eos magnam, quisquam velit in laudantium voluptatem vitae nisi consectetur esse perspiciatis assumenda facilis. Nam consectetur, sequi ipsam repudiandae dolore culpa neque dolores hic non suscipit voluptatum quaerat? Sapiente necessitatibus, molestiae distinctio itaque libero corporis dolorum nemo veritatis, commodi, eaque doloribus praesentium soluta hic consequuntur qui? Saepe voluptas pariatur aliquid odit commodi qui quas. Iure facere dolorem corporis, quis ullam suscipit obcaecati repudiandae possimus rem placeat, voluptates ut rerum eveniet earum a et numquam, reiciendis minima.',

    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'note 1',
    body: '1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem, amet et molestiae nulla accusantium doloribus officia harum dicta corrupti? Aperiam, facere. Deleniti, alias eos magnam, quisquam velit in laudantium voluptatem vitae nisi consectetur esse perspiciatis assumenda facilis. Nam consectetur, sequi ipsam repudiandae dolore culpa neque dolores hic non suscipit voluptatum quaerat? Sapiente necessitatibus, molestiae distinctio itaque libero corporis dolorum nemo veritatis, commodi, eaque doloribus praesentium soluta hic consequuntur qui? Saepe voluptas pariatur aliquid odit commodi qui quas. Iure facere dolorem corporis, quis ullam suscipit obcaecati repudiandae possimus rem placeat, voluptates ut rerum eveniet earum a et numquam, reiciendis minima.',

    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'note 2',
    body: '2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem, amet et molestiae nulla accusantium doloribus officia harum dicta corrupti? Aperiam, facere. Deleniti, alias eos magnam, quisquam velit in laudantium voluptatem vitae nisi consectetur esse perspiciatis assumenda facilis. Nam consectetur, sequi ipsam repudiandae dolore culpa neque dolores hic non suscipit voluptatum quaerat? Sapiente necessitatibus, molestiae distinctio itaque libero corporis dolorum nemo veritatis, commodi, eaque doloribus praesentium soluta hic consequuntur qui? Saepe voluptas pariatur aliquid odit commodi qui quas. Iure facere dolorem corporis, quis ullam suscipit obcaecati repudiandae possimus rem placeat, voluptates ut rerum eveniet earum a et numquam, reiciendis minima.',

    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'note 3',
    body: '3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem, amet et molestiae nulla accusantium doloribus officia harum dicta corrupti? Aperiam, facere. Deleniti, alias eos magnam, quisquam velit in laudantium voluptatem vitae nisi consectetur esse perspiciatis assumenda facilis. Nam consectetur, sequi ipsam repudiandae dolore culpa neque dolores hic non suscipit voluptatum quaerat? Sapiente necessitatibus, molestiae distinctio itaque libero corporis dolorum nemo veritatis, commodi, eaque doloribus praesentium soluta hic consequuntur qui? Saepe voluptas pariatur aliquid odit commodi qui quas. Iure facere dolorem corporis, quis ullam suscipit obcaecati repudiandae possimus rem placeat, voluptates ut rerum eveniet earum a et numquam, reiciendis minima.',

    createdAt: new Date(),
  },
  {
    id: 4,
    title: 'note 4',
    body: '4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem, amet et molestiae nulla accusantium doloribus officia harum dicta corrupti? Aperiam, facere. Deleniti, alias eos magnam, quisquam velit in laudantium voluptatem vitae nisi consectetur esse perspiciatis assumenda facilis. Nam consectetur, sequi ipsam repudiandae dolore culpa neque dolores hic non suscipit voluptatum quaerat? Sapiente necessitatibus, molestiae distinctio itaque libero corporis dolorum nemo veritatis, commodi, eaque doloribus praesentium soluta hic consequuntur qui? Saepe voluptas pariatur aliquid odit commodi qui quas. Iure facere dolorem corporis, quis ullam suscipit obcaecati repudiandae possimus rem placeat, voluptates ut rerum eveniet earum a et numquam, reiciendis minima.',
    createdAt: new Date(),
  },
  {
    id: 5,
    title: 'note 5',
    body: '555 555 555 555 555.',
    createdAt: new Date(),
  },
  {
    id: 6,
    title: 'note 6',
    body: '666 666 666 666 666 666. 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem, amet et molestiae nulla accusantium doloribus officia harum dicta corrupti? Aperiam, facere. Deleniti, alias eos magnam, quisquam velit in laudantium voluptatem vitae nisi consectetur esse perspiciatis assumenda facilis. Nam consectetur, sequi ipsam repudiandae dolore culpa neque dolores hic non suscipit voluptatum quaerat? Sapiente necessitatibus, molestiae distinctio itaque libero corporis dolorum nemo veritatis, commodi, eaque doloribus praesentium soluta hic consequuntur qui? Saepe voluptas pariatur aliquid odit commodi qui quas. Iure facere dolorem corporis, quis ullam suscipit obcaecati repudiandae possimus rem placeat, voluptates ut rerum eveniet earum a et numquam, reiciendis minima',
    createdAt: new Date(),
  },
]

const initialNotesContext: INotesContext = {
  notes: initialNotes,
  activeNoteId: 0,
  setActiveNoteId: () => {},
  addNote: () => {},
  deleteNote: () => {},
  editNote: () => {},
  isAdding: false,
  setIsAdding: () => {},
  isEditing: false,
  setIsEditing: () => {},
}

export const NotesContext = createContext<INotesContext>(initialNotesContext)

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Array<INote>>(initialNotes)
  const [activeNoteId, setActiveNoteId] = useState(0)
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const addNote = (note: INote) => {
    setNotes(prevState => [...prevState, note])
  }
  const editNote = (noteId: number, newNote: INote) => {
    setNotes(notes.map(note => (note.id === noteId ? newNote : note)))
  }

  const deleteNote = (noteId: number) => {
    setNotes(notes.filter(note => note.id !== noteId))
  }

  const contextValue = {
    notes,
    addNote,
    editNote,
    deleteNote,
    activeNoteId,
    setActiveNoteId,
    isEditing,
    setIsEditing,
    isAdding,
    setIsAdding,
  }

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  )
}
