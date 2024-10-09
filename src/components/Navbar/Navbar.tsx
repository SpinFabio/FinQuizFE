import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../images/finquizLogoTiniOrizontal.png';

const NavBar: React.FC = () => {
  const theme = useTheme();

  const buttonStyles = {
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 5 }}>
      <Toolbar sx={{ minWidth: 320 }}>
        <Button
          component={Link}
          to="/"
          sx={buttonStyles}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: '25px', width: 'auto' }}
            />
          </Box>
        </Button>

        <Box sx={{ ml: 'auto' }}>
          <Button
            component={Link}
            to="/profile"
            sx={{
              ...buttonStyles,
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          >
            <Typography variant="h6">Profilo</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
