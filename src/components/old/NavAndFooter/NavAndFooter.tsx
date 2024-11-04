import React from 'react';
import NavBar from "./Navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import Footer from "./Footer/Footer.tsx";

interface NavAndFooterProps {
  // Definisci le proprietà del componente qui
}

const NavAndFooter: React.FC<NavAndFooterProps> = () => {
  return (
    <div>
      <NavBar/>

      <Container
        maxWidth="md"
        sx={{
          padding: { xs: '16px', sm: '24px', md: '32px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Outlet/>
      </Container>
      <Footer/>
    </div>
  );
};

export default NavAndFooter;
