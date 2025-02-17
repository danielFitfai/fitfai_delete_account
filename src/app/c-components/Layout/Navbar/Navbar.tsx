import './Navbar.css';
import clomberIcon from '../../../../assets/images/logo/fitfai-icon.png';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styles } from '../../../../assets/styles/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBarButtons } from '../models/layoutProps.models';

function Navbar({
  navBarButtons,
  navBarLogoUrl = '/',
  staticNavbar = true
}: any) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [hiddeNavBar, setHiddeNavBar] = useState(!staticNavbar);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavigation = (path: string | null) => {
    setAnchorElNav(null);
    if (path) {
      const isInternalNavigation = path[0] === '/';
      if (isInternalNavigation) {
        navigate(path);
      } else {
        window.location.assign(path);
      }
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 100) {
        setHiddeNavBar(false);
      } else {
        setHiddeNavBar(true);
      }
    };
    if (!staticNavbar) {
      controlNavbar();
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    } else {
      setHiddeNavBar(false);
    }
  }, [staticNavbar]);

  return (
    <Container
      className={`active ${hiddeNavBar && 'hidden'}`}
      sx={{
        minWidth: '100vw',
        background: styles.white,
        boxShadow: 2,
        zIndex: 50
      }}
    >
      <Toolbar disableGutters>
        {/* Laptop view */}
        <Button
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
          className="navbar-logo"
          onClick={() => handleNavigation(navBarLogoUrl)}
        >
          <Avatar alt="Clomber logo" src={clomberIcon} sx={{ mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              my: 'auto',
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: styles.black,
              textDecoration: 'none',
              textTransform: 'none'
            }}
          >
            Fitfai
          </Typography>
        </Button>
        {navBarButtons.length !== 0 ? (
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {navBarButtons.map((page: NavBarButtons) => (
              <Button
                key={page.name}
                onClick={() => handleNavigation(page.redirectionUrl)}
                sx={{
                  my: 2,
                  color: styles.black,
                  display: 'block',
                  textTransform: 'none'
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        ) : (
          <></>
        )}

        {/* Phone view */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {navBarButtons.length !== 0 ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleNavigation(null)}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {navBarButtons.map((page: NavBarButtons) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleNavigation(page.redirectionUrl)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            ''
          )}
        </Box>

        <Avatar
          alt="Clomber logo"
          src={clomberIcon}
          sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          onClick={() => handleNavigation(navBarLogoUrl)}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          onClick={() => handleNavigation(navBarLogoUrl)}
          sx={{
            mr: navBarButtons.length !== 0 ? 7 : 1,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontWeight: 700,
            color: styles.black,
            textDecoration: 'none'
          }}
        >
          Fitfai
        </Typography>
      </Toolbar>
    </Container>
  );
}
export default Navbar;
