import { Box, Button, FormLabel, TextField } from '@mui/material'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useNotes } from 'hooks/useNotes'
import { INote } from 'types/types'

interface NoteFormProps {
  note: INote
  setIsEditing?: (isEditing: boolean) => void
  setIsAdding?: (isAdding: boolean) => void
}

export const NoteForm = ({
  note,
  setIsEditing,
  setIsAdding,
}: NoteFormProps) => {
  const [formData, setFormData] = useState<INote>(note)
  const { addNote, editNote } = useNotes()

  // const handleFormSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   console.log('form sending..')
  //   editNote(note.id, formData)
  //   setIsEditing(false)
  // }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    // setIsEditing(false)
  }

  useEffect(() => {
    editNote(note.id, formData)
  }, [formData])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <FormLabel>Title</FormLabel>
        <TextField
          sx={{ p: 2 }}
          defaultValue={note?.title}
          name="title"
          onChange={handleInput}
        />
      </Box>
      <Box>
        <FormLabel>Content:</FormLabel>
        <TextField
          defaultValue={note?.body}
          name="body"
          onChange={handleInput}
        />
      </Box>
      {/* <Button type="submit" variant="outlined">
          Save
        </Button> */}
      {/* </form> */}
      {/* <Box>
        <Button onClick={() => setIsEditing(false)}>Cancel edit</Button>
      </Box> */}

      {setIsEditing && (
        <Button
          onClick={() => {
            setIsEditing(false)
            // setIsAdding(false)
          }}
        >
          Done
        </Button>
      )}

      {setIsAdding && (
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
