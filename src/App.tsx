import {ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {theme} from './config/theme.config'
import Router from './route'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
