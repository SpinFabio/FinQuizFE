import React from 'react';
import {Box, Button, Paper, Tooltip, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import {ButtonConfig} from "./buttonConfigData.ts";


interface ThreeModComponentProps {
  buttonConfigs: ButtonConfig[];
  currentMode: string;
  handleModeChange: (modeId: string) => void;
}

const ThreeModComponent: React.FC<ThreeModComponentProps> = ({
                                                               buttonConfigs,
                                                               handleModeChange,
                                                               currentMode,
                                                             }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        maxWidth: { xs: '100%', md: '1000px' }, // Larghezza massima responsiva
        minWidth: { xs: '300px', sm: '500px' }, // Larghezza minima per i piccoli schermi
        m: 'auto',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 2,
          borderRadius: 4,
          p: 3,
          justifyContent: 'space-around',
          flexWrap: 'nowrap', // Permette di adattarsi agli schermi più piccoli
          width: '100%',
        }}
      >
        {buttonConfigs.map((buttonConfig) => (
          <Tooltip key={buttonConfig.partialPath} title={buttonConfig.tooltip} arrow>
            <Button
              variant={currentMode === buttonConfig.partialPath ? 'contained' : 'outlined'}
              onClick={() => handleModeChange(buttonConfig.partialPath)}
              className={buttonConfig.className}
              component={Link}
              disabled={buttonConfig.isDisabled}
              to={buttonConfig.to}
              sx={{
                borderRadius: 4,
                p: { xs: '8px 16px', md: '10px 20px' },
              }}
            >
              <Typography
                variant={'h5'}
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' },
                }}
              >
                {buttonConfig.text}
              </Typography>
            </Button>

          </Tooltip>
        ))}
      </Paper>
    </Box>
  );
};

export default ThreeModComponent;
