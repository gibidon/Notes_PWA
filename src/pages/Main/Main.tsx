import { Box } from '@mui/material'
import { Sidebar, Workspace } from 'components/index'

export const Main = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Workspace />
    </Box>
  )
}
