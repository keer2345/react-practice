import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { Link } from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import { useState } from 'react'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon />
        My Resturant
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </Box>
  )

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component={'nav'}  sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} color={'goldenrod'}>
              <FastfoodIcon />
              My Resturant
            </Typography>{' '}
            <IconButton
              color='inherit'
              aria-label='open drawer '
              edge='start'
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px'
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
          <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header
