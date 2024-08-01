import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useNotes } from 'hooks/useNotes'

export const drawerWidth = 240

export function Sidebar() {
  const { notes, activeNoteId, setActiveNoteId } = useNotes()
  // const activeNote = notes.find(note => note.id === activeNoteId)

  console.log('notes in sidebar', notes)

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {notes.map(note => (
            <ListItemButton key={note.id} selected={note.id === activeNoteId}>
              <ListItemText onClick={() => setActiveNoteId(note.id)}>
                {note.title}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}
