import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button, Tooltip, Avatar, Input,InputAdornment } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Foto from './Foto';
import img from './sitefilme.png'
import SearchIcon from '@mui/icons-material/Search';

const settings = ['Minha Conta','Entrar', 'Cadastrar', 'Editar Filme Cadastrado'];
function MenuResponsivo() {

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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
                
                
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                
            </IconButton>
            <Menu 
             id="menu-appbar"
             anchorEl={anchorElNav}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
             open={Boolean(anchorElNav)}
             
             sx={{
               display: { xs: 'block', md: 'none' },
             }}
            >
            <MenuItem key="Minha Conta" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='#' >Minha Conta</a></Typography>
            </MenuItem>
            <MenuItem key="Entrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/login'>Entrar</a></Typography>
            </MenuItem>
            <MenuItem key="Cadastrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/cadastro'>Cadastrar</a></Typography>
            </MenuItem>
            <MenuItem key="Editar Filme Cadastrado" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/edicao/:id'>Editar Filme Cadastrado</a></Typography>
            </MenuItem>
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Foto foto={img}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>      
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                        <a href="http://localhost:3000/">Ínicio</a>
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                        Séries
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                        Filmes
                    </Button>  
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                        Bombando
                    </Button>  
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                        Minha Lista
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                        Navegar Por Idiomas
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block' }} href="filmes">
                        Cadastrar Filmes
                    </Button>
          </Box>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Input 
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            />
          </Box>

              
              
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Gyuliana Fávaro" src="/static/images/avatar/2.jpg"  sx={{ bgcolor: "#BD0A0A", color:"white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px',color: 'black' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
            <MenuItem key="Minha Conta" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='#' >Minha Conta</a></Typography>
            </MenuItem>
            <MenuItem key="Entrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/login'>Entrar</a></Typography>
            </MenuItem>
            <MenuItem key="Cadastrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/cadastro'>Cadastrar</a></Typography>
            </MenuItem>
            <MenuItem key="Editar Filme Cadastrado" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/edicao/:id'>Editar Filme Cadastrado</a></Typography>
            </MenuItem>
            </Menu>
            </Box>
        </Toolbar>
        </Container>

    </AppBar>
  )
}

export default MenuResponsivo;