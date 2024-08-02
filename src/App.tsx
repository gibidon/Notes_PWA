import { Routes, Route } from 'react-router-dom'
import { AuthProvider, NotesProvider } from './contexts'
import { Login, Main, PrivatePage } from 'pages'

// import './App.css'

function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivatePage>
                <Main />
              </PrivatePage>
            }
          />
        </Routes>
      </NotesProvider>
    </AuthProvider>
  )
}

export default App
