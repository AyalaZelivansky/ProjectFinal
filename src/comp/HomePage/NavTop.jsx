import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom'
import { useState } from 'react';



const pages = ['ToDo', 'Potho', 'Post', 'Users'];

const ResponsiveAppBar=()=> {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            Home
          </Typography>

          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: purple[500],
              textDecoration: 'none',
            }}
          >
            home
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,color:purple[500]}}>
            {pages.map((page) => (
           
              <>
                <Button sx={{color:purple[500]}}>

                  <Link to={page}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Link>
                </Button>

              </>

            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar >
  );

}
export default ResponsiveAppBar;