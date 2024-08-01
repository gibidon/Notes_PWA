import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from '@mui/material'
import { NoteForm, SearchBox } from 'components'
import { useNotes } from 'hooks/useNotes'
import { useState } from 'react'
import { createNewNote } from 'utils/createNewNote'

export const Workspace = () => {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState('')

  let { notes, activeNoteId, deleteNote, setActiveNoteId } = useNotes()

  if (searchPhrase !== '') {
    notes = notes.filter(note => note.body.includes(searchPhrase))
  }

  const activeNote = notes.find(note => note.id === activeNoteId)

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleDeleteNote = () => {
    if (activeNote) {
      setActiveNoteId(activeNoteId + 1)
      deleteNote(activeNote.id)
      handleCloseModal()
    }
  }

  if (isAdding) {
    return (
      <Box>
        <Typography>Create new note</Typography>
        <NoteForm
          // setIsEditing={setIsEditing}
          note={createNewNote()}
          setIsAdding={setIsAdding}
        />
      </Box>
    )
  }

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
    >
      {!isEditing && !isAdding && (
        <SearchBox setSearchPhrase={setSearchPhrase} />
      )}
      {searchPhrase !== '' && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {notes.map(note => (
            <Box>
              <Typography fontSize={36} fontWeight={700}>
                {note.id}
              </Typography>
              <Typography>{note.title}</Typography>
              <Typography>{note.body}</Typography>
            </Box>
          ))}
        </Box>
      )}
      {isEditing && activeNote ? (
        <NoteForm note={activeNote} setIsEditing={setIsEditing} />
      ) : (
        <>
          <Typography paragraph fontSize={26}>
            {activeNote?.title}
          </Typography>
          <Typography paragraph>{activeNote?.body}</Typography>

          {searchPhrase === '' && (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button onClick={() => setOpenModal(true)} variant="outlined">
                Delete note
              </Button>
              <Button onClick={() => setIsEditing(true)} variant="outlined">
                Edit note
              </Button>
              <Button
                onClick={() => {
                  setIsAdding(true)
                }}
                variant="outlined"
              >
                Add note
              </Button>
            </Box>
          )}

          <Dialog
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Delete this note?</DialogTitle>

            <DialogActions>
              <Button onClick={handleCloseModal} variant="outlined">
                Cancel
              </Button>
              <Button onClick={handleDeleteNote} autoFocus variant="outlined">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Box>
  )
}
