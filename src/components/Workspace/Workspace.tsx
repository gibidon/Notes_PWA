import { useMemo, useState } from 'react'
import { useNotes } from 'hooks/useNotes'
import { Box, Button, Typography } from '@mui/material'
import { Modal, NoteForm, SearchBox } from 'components'

export const Workspace = () => {
  const [openModal, setOpenModal] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState('')

  let {
    notes,
    activeNoteId,
    deleteNote,
    setActiveNoteId,
    isEditing,
    setIsEditing,
    isAdding,
    setIsAdding,
  } = useNotes()
  const activeNote = notes.find(note => note.id === activeNoteId)

  const filteredNotes = useMemo(() => {
    if (searchPhrase !== '') {
      return notes.filter(note => note.body.includes(searchPhrase))
    }

    return notes
  }, [searchPhrase])

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

  if (isEditing) return <NoteForm note={activeNote} />
  if (isAdding) return <NoteForm />

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
    >
      <SearchBox setSearchPhrase={setSearchPhrase} />

      {searchPhrase !== '' ? (
        <Box>
          {filteredNotes.map(note => (
            <Box
              sx={{
                padding: '0.6rem 0.3rem',
                '&:hover': {
                  borderColor: 'rgba(255,240,10,0.8)',
                  backgroundColor: 'lightgrey',
                },
              }}
              onClick={() => {
                setSearchPhrase('')
                setActiveNoteId(note.id)
              }}
            >
              <Typography fontSize={36} fontWeight={700}>
                {note.title}
              </Typography>
              <Typography>{note.body}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          <Typography paragraph fontSize={26}>
            {activeNote?.title}
          </Typography>

          <Typography paragraph>{activeNote?.body}</Typography>

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

          <Modal
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            handleDeleteNote={handleDeleteNote}
          />
        </Box>
      )}
    </Box>
  )
}
