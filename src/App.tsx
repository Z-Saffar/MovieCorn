import { ThemeProvider } from '@material-ui/core'
import { localstorageInitialization } from 'helper'
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRouter from './AppRouter'
import { theme } from 'theme/theme'
function App() {

  useEffect(() => {
    localstorageInitialization()
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Router>
  )
}

export default App
