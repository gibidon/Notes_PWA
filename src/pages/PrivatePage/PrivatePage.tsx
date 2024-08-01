import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'

interface PrivatePageProps {
  children: React.ReactNode
}

export const PrivatePage = ({ children }: PrivatePageProps) => {
  const auth = useAuth()
  const location = useLocation()

  console.log('current auth: ', auth)

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return children
}
