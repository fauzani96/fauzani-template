import {ThemeProvider} from '@mui/material'
import React from 'react'
import {theme} from './config/theme.config'
import Home from './page/home/Home.component'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
