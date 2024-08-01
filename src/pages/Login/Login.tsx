import { ChangeEvent, useState } from 'react'
import { useAuth } from 'hooks/useAuth'
import { TUser } from 'types/types'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Button, Container, Input, Typography } from '@mui/material'
import { styled } from '@mui/material'

const InputContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid black',
  borderRadius: '8px',
  maxWidth: '1078px',
  padding: '10px 6px',
})

export const Login = () => {
  const [login, setLogin] = useState<TUser>('')

  if (login === 'bomb') {
    throw new Error('Bomb!!!')
  }

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/'

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  return (
    <Box>
      <InputContainer>
        <form
          onSubmit={() =>
            auth.signin(login, () => {
              navigate(from, { replace: true })
            })
          }
        >
          <Typography sx={{ fontSize: '28px' }}>Please log in</Typography>
          <label htmlFor="login" />
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Input
              id="login"
              name="login"
              type="text"
              placeholder="login"
              onChange={handleLoginInput}
            />
            <Button type="submit">Log in</Button>
          </Box>
        </form>
      </InputContainer>
    </Box>
  )
}
