import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRouter from './AppRouter'
import useApp from './hooks/useLocalstorageInitialization'

function App() {
  useApp()
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
