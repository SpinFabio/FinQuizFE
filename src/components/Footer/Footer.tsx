import React from 'react';
import {Container, Typography, IconButton, Box, Paper, useTheme} from '@mui/material';
import { FaFacebook as FacebookIcon, FaLinkedin as LinkedInIcon, FaInstagram as InstagramIcon, FaTwitter as TwitterIcon } from 'react-icons/fa';



const Footer: React.FC = () => {

  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        minWidth: 320,
        mt: 5,
        py: 4,
        width: '100vw',
        bottom: 0,
        backgroundColor: theme.palette.primary.main,
        borderTop: 1,
      }}
    >
      <Container>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent:  'space-around' ,
          alignItems: 'center',
          gap: { xs: 2, sm: 0 }
        }}>

          <Paper sx={{
            px: '4%',
            py: '2%',
            mt: 2,
            bgcolor: theme.palette.background.default,
            borderRadius: 2,
            boxShadow: 10,
            mb: { xs: 2, sm: 0 },
            textAlign: 'left' ,
          }}>
            <Typography variant="h6" >Contattaci</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
                  <a href="mailto:info@example.com">info@example.com</a>
                  <a href="tel:+123456789">+1 (234) 567-89</a>
            </Box>
          </Paper>


          <Paper sx={{
            px: '2%',
            py: '2%',
            bgcolor: theme.palette.background.default,
            borderRadius: 2,
            boxShadow: 10,
            mb: { xs: 2, sm: 0 },
            textAlign: 'left' ,
          }}>
            <Typography variant="h6" >Seguici</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              gap: 1
            }}>
              <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                          sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.2)',
                            },
                            fontSize: { xs: '1.5rem', sm: '2rem' }
              }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                          sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.2)',
                            },
                            fontSize: { xs: '1.5rem', sm: '2rem' }
              }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                          sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.2)',
                            },
                            fontSize: { xs: '1.5rem', sm: '2rem' }
              }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                          sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.2)',
                            },
                            fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" sx={{ color: theme.palette.primary.contrastText }}>
            © 2024 FinQuiz
          </Typography>
        </Box>

      </Container>

    </Box>
  );
};

export default Footer;
