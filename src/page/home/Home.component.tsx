import React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material'
import {Link, Outlet} from 'react-router-dom'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import AdbIcon from '@mui/icons-material/Adb'
import SearchIcon from '@mui/icons-material/Search'
import {styled, alpha} from '@mui/material/styles'

const pages = ['Products', 'Pricing', 'Blog']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

function Home() {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Container maxWidth="lg" sx={{display: {xs: 'none', md: 'block'}}}>
            <Toolbar disableGutters>
              <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: {xs: 'none', md: 'flex'},
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    //   onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{flexGrow: 0}}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                  />
                </Search>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container maxWidth="lg">
        <Box sx={{my: 2}}>
          {[...new Array(55)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
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
      </Container>
    </>
  )
}

export default Home
