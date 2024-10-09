import React from 'react';
import {
  Container,
  Typography,
  IconButton,
  Box,
  useTheme,
  Link,
} from '@mui/material';
import {
  FaFacebook as FacebookIcon,
  FaLinkedin as LinkedInIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from 'react-icons/fa';

const socialLinks = [
  { label: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com' },
  { label: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com' },
  { label: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  { label: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com' },
];

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({
                                                                            title,
                                                                            children,
                                                                          }) => {


  return (
    <Box sx={{ maxWidth: 300, width: '100%', textAlign: 'left' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};


const BulletPoint: React.FC<{text: string}> = ({ text }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: 8 }}>•</span> {text}
    </Box>
  );
};


const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 4,
          }}
        >
          <InfoCard title="Contattaci">
            <Typography variant="body2">
              <Link
                href="mailto:info@example.it"
                underline="none"
                color="inherit"
              >

                <BulletPoint text={'example@gmail.com'}/>
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="tel:+123456789" underline="none" color="inherit">

                <BulletPoint text={'23 456 06789'}/>
              </Link>
            </Typography>
          </InfoCard>

          <InfoCard title="Potrebbe Interessarti">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  textTransform: 'none',
                  color: 'inherit',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <BulletPoint text={'FAQ'}/>
              </Typography>

              <Typography
                sx={{
                  textTransform: 'none',
                  color: 'inherit',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <BulletPoint text={'Date dei Bandi'}/>
              </Typography>
            </Box>
          </InfoCard>

          <InfoCard title="Seguici">
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'left' }}>
              {socialLinks.map(({ label, icon, url }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'inherit',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </InfoCard>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} FinQuiz
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
