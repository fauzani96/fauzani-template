import React from 'react'
import {Avatar, Icon, Typography} from '@mui/material'

function App() {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex items-center">
        <Typography variant="h6">Happy Birthday!</Typography>
        <Icon className="ml-1">celebration</Icon>
      </div>
      <Avatar
        src="https://asset.kompas.com/crops/EigMGs4Z2XmsY2uJa4b3OFzOkOM=/0x60:930x680/750x500/data/photo/2022/05/04/62723f5727b5f.jpg"
        alt="people"
        sx={{width: 56, height: 56}}
      />
      <Typography variant="h6">Elizabeth Olsen</Typography>
    </div>
  )
}

export default App
