import React, {useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CustomCheckboxComponentProps {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckboxComponent: React.FC<CustomCheckboxComponentProps> = ({ id, name, checked, onChange }) => {

  useEffect(() => {
    console.log(`customCheckBox: ${name} ${checked ? 'true' : 'false'}`);
  }, [checked]);


  return (
    <Checkbox
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      sx={{
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        '& .MuiSvgIcon-root': {
          borderRadius: 4,
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
        },
        '&.Mui-checked .MuiSvgIcon-root': {
          backgroundColor: 'primary.main',
          borderColor: 'primary.main',
        },
      }}
    />
  );
};

export default React.memo(CustomCheckboxComponent);
