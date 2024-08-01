import { Box, Button, FormLabel, TextField } from '@mui/material'
import { ChangeEvent, useState, useEffect } from 'react'
import { useNotes } from 'hooks/useNotes'
import { INote } from 'types/types'
import { createNewNote } from 'utils/createNewNote'

interface NoteFormProps {
  note?: INote
}

export const NoteForm = ({ note }: NoteFormProps) => {
  console.log('note incoming to form:', note)
  const { addNote, editNote, isEditing, setIsEditing, isAdding, setIsAdding } =
    useNotes()
  const [formData, setFormData] = useState<INote>(note ?? createNewNote())

  console.log('note in fact', formData)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    editNote(formData.id, formData)
  }, [formData])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <FormLabel>Title</FormLabel>
        <TextField
          sx={{ p: 2 }}
          defaultValue={formData?.title}
          name="title"
          onChange={handleInput}
        />
      </Box>
      <Box>
        <FormLabel>Content:</FormLabel>
        <TextField
          defaultValue={formData?.body}
          name="body"
          onChange={handleInput}
        />
      </Box>

      {isEditing && (
        <Button
          onClick={() => {
            setIsEditing(false)
          }}
        >
          Done
        </Button>
      )}

      {isAdding && (
        <Button
          onClick={() => {
            addNote(formData)
            setIsAdding(false)
          }}
        >
          Add note
        </Button>
      )}
    </Box>
  )
}
