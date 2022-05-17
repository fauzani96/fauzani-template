import React from 'react'
import {Avatar, Button, Icon, Typography} from '@mui/material'
import {Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex items-center">
        <Typography variant="body1">Happy Birthday!</Typography>
        <Icon className="ml-1">celebration</Icon>
      </div>
      <Avatar
        src="https://asset.kompas.com/crops/EigMGs4Z2XmsY2uJa4b3OFzOkOM=/0x60:930x680/750x500/data/photo/2022/05/04/62723f5727b5f.jpg"
        alt="people"
        sx={{width: 56, height: 56}}
      />
      <Typography variant="body1">Elizabeth Olsen</Typography>
      <Button variant="contained" color="primary">
        button example yuk
      </Button>
      <Link to="/collection">Collection</Link>
      <Link to="/">Back!</Link>
      <Outlet />
    </div>
  )
}

export default Home
