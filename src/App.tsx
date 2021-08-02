import { localstorageInitialization } from 'helper'
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRouter from './AppRouter'

function App() {

  useEffect(() => {
    localstorageInitialization()
  }, [])

  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
