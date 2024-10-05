import React from 'react';
import { TextField, Box, Icon } from '@mui/material';

interface QuantitySelectorProps {
  quantity: number;
  index: number;
  subIndex?: number;
  handleQuantityChange: (index: number, delta: number, subIndex?: number,) => void;
  handleInputNumberChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
                                                             quantity,
                                                             index,
                                                             subIndex,
                                                             handleQuantityChange,
                                                             handleInputNumberChange,
                                                           }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mx: 2,
      }}
    >
      {/* Bottone per decrementare */}
      <Icon
        color="primary"
        onClick={() => handleQuantityChange(index, -1, subIndex)}
        sx={{
          transform: 'scale(1.5)',
          '&:hover': {
            transform: 'scale(1.8)',
          },
          cursor: 'pointer',
        }}
      >
        remove_circle
      </Icon>

      <TextField
        type="number"
        value={quantity}
        variant="outlined"
        color="primary"
        onChange={(event) => handleInputNumberChange(index, event)}
        sx={{
          maxWidth: '60px',
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
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

      {/* Bottone per incrementare */}
      <Icon
        color="primary"
        onClick={() => handleQuantityChange(index, +1, subIndex)} // Condizione gestita automaticamente
        sx={{
          transform: 'scale(1.5)',
          '&:hover': {
            transform: 'scale(1.8)',
          },
          cursor: 'pointer',
        }}
      >
        add_circle
      </Icon>
    </Box>
  );
};

export default React.memo(QuantitySelector);
