import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'

interface ModalProps {
  openModal: boolean
  handleCloseModal: () => void
  handleDeleteNote: () => void
}

export const Modal = ({
  openModal,
  handleCloseModal,
  handleDeleteNote,
}: ModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
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
  )
}
