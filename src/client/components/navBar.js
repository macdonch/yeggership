import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import DarkModeLogo from '../../assets/logo_512_grey_transparent.png';
import LightModeLogo from '../../assets/logo_512_white_transparent.png';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate, useLocation } from "react-router-dom";
import {GetPages} from "../services/getContent"
import { useTheme } from '@mui/material/styles';

const pages = GetPages();

function NavBar(props) {
    const location = useLocation();

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

    let themeIcon;
    let logo;

    if (props.state.theme === 'dark') {
      themeIcon = <Brightness7Icon />;
      logo = DarkModeLogo;
    } else {
      themeIcon = <Brightness3Icon />;
      logo = LightModeLogo;      
    }

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = (event) => {
      setAnchorElNav(null);
      navigate(event.target.title);
    };

    const getFontWeight = (path) => {
      const fontWeight = path === location.pathname ? 'bold' : 'normal';
      return fontWeight;
    }
    
    
  return (
    <AppBar position="static" color="primary" enableColorOnDark sx={{my: 2}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{ height: 64, m: 2, display: { xs: 'none', md: 'flex' }, mr: 1 }}
            alt="logo"
            src={logo}
          />     
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
            YEGGERSHIP
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
              <MenuIcon />
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                "& .MuiPaper-root": {
                  backgroundColor: primary
                }
              }}
            >
              {pages.map(({displayText, key, path}) => (
                <MenuItem key={key} title={path} component={Link} onClick={handleCloseNavMenu}>
                  <Typography name={key} title={path} color="secondary" textAlign="center" sx={{fontWeight: getFontWeight(path)}}>{displayText}</Typography>
                </MenuItem>
              ))}
            </Menu>            
          </Box>
          <Box
            component="img"
            sx={{ height: 64, m: 2, display: { xs: 'flex', md: 'none' }, mr: 1}}
            alt="logo"
            src={logo}
          />              
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            SMALL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
            {pages.map(({displayText, key, path}) => (
              <Button key={key} onClick={() => navigate(path)} color="secondary" sx={{ my: 2, display: 'block', fontWeight: getFontWeight(path) }} >
                {displayText}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography
            variant="BUTTON TEXT"
            noWrap
            sx={{
              md: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              CHANGE MODE
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => props.handleChange()}
          >
            {themeIcon}
          </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;