import React from 'react';
import { TextField, Box, Icon } from '@mui/material';

interface QuantitySelectorProps {
  quantity: number;
  index: number;
  handleQuantityChange: (index: number, delta: number) => void;
  handleInputNumberChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
                                                             quantity,
                                                             index,
                                                             handleQuantityChange,
                                                             handleInputNumberChange,
                                                           }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mx:2,
      }}
    >
      <Icon
        color="primary"
        onClick={() => handleQuantityChange(index, -1)}
        sx={{

          transform: 'scale(1.5)',
          '&:hover': {
            transform: 'scale(1.2)',
          },
          cursor: 'pointer', // Aggiunge il puntatore
        }}
      >
        remove_circle
      </Icon>

      <TextField
        type="number"
        value={quantity}
        variant="outlined"
        color={"primary"}

        onChange={(event) => handleInputNumberChange(index, event)}

        sx={{
          maxWidth: '60px',
          '& .MuiOutlinedInput-root': {
            borderRadius: 4, // Imposta il border-radius
          },
          '& input': {
            textAlign: 'center',
            fontSize: '1rem',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              display: 'none',
            },
            '-moz-appearance': 'textfield',
          },
        }}
      />

      <Icon
        color="primary"
        onClick={() => handleQuantityChange(index, +1)}
        sx={{

          transform: 'scale(1.5)',
          '&:hover': {
            transform: 'scale(1.2)',
          },
          cursor: 'pointer', // Aggiunge il puntatore
        }}
      >
        add_circle
      </Icon>
    </Box> // Chiusura del Box qui
  );
};

export default QuantitySelector;
