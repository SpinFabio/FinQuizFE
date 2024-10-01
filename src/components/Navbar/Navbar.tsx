import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import { Link, } from 'react-router-dom';
import logo from '../../images/finquizLogoTiniOrizontal.png';


const NavBar: React.FC = () => {

  const theme = useTheme();
  return (
    <AppBar position="static">
      <Box
        sx={{
          boxShadow: 5,
        }}
      >

      <Toolbar
        sx={{
          minWidth: 320, // risolve problemi con schermi piccoli
        }}
      >

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              textDecoration: 'none',
              color: theme.palette.primary.contrastText,

            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: '25px', width: 'auto' }} // Dimensioni regolabili
              />
            </Box>
            {/*<Typography variant={"h5"}>FinQuiz</Typography>*/}
          </Button>
        </Typography>

        <Button
          sx={{
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.2)',
            },
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
            mr: 2
          }}
        >
          <Typography variant={'h6'}>Profilo</Typography>
        </Button>
      </Toolbar>

      </Box>
    </AppBar>
  );
};

export default NavBar;
