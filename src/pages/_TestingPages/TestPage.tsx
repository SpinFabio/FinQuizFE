import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { buttonConfigs } from "../../components/ThreeModComponent/buttonConfigData.ts";
import ListEntryTest from "../../components/ListEntryTest/ListEntryTest.tsx";

const TestPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography>
        Siamo nella sezione di test
      </Typography>

      {buttonConfigs.map((button) => (
        <div key={button.id}>

          <Accordion
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
            }}
          >
            <AccordionSummary
              aria-controls="panel-content"
              id="panel-header"
              sx={{
                backgroundColor: 'transparent', // Rende trasparente lo sfondo del summary
                padding: 0,                     // Rimuove i padding
                '&.Mui-expanded': {
                  minHeight: 0,                 // Mantiene compatto l'accordion quando espanso
                },
                '& .MuiAccordionSummary-content': {
                  margin: 0,                    // Rimuove il margine dal contenuto
                },
              }}
            >
              <ListEntryTest button={button} />
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: 'transparent',
                padding: 0,
              }}
            >
              <ListEntryTest button={button} />
            </AccordionDetails>
          </Accordion>

        </div>
      ))}
    </Box>
  );
};

export default TestPage;
