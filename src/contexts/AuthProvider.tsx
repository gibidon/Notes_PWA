import { createContext, useState } from 'react'
// import { TUser } from '../Types/types'
import { TUser } from 'types/types'

interface AuthProviderProps {
  children: React.ReactNode
}

interface IAuthContext {
  user: TUser | null
  signin: (newUser: TUser, callback: Function) => void
  signout: (callback: Function) => void
}

const initialAuthContext: IAuthContext = {
  user: null,
  signin: () => {},
  signout: () => {},
}

export const AuthContext = createContext(initialAuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null)

  const signin = (newUser: TUser, callback: Function) => {
    setUser(newUser)
    callback()
  }

  const signout = (callback: Function) => {
    setUser(null)
    callback()
  }

  const contextValue = { user, signin, signout }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
