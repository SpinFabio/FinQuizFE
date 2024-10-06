import React from 'react';
import { Paper, Typography } from '@mui/material';
import CustomCheckboxComponent from '../CustomCheckboxComponent/CustomCheckboxComponent';
import QuantitySelector from '../QuantitySelector/QuantitySelector.tsx';
import {subArgMicro} from "../MicroForm/MicroFormData.ts";
import {useMicroFormContext} from "../MicroForm/MicroFormContext.tsx";

interface MicroListBodyComponentProps {
  subcategory: subArgMicro;
  categoryIndex: number;
  subcategoryIndex: number;
}

const MicroListBodyComponent: React.FC<MicroListBodyComponentProps> = ({
                                                                         subcategory,
                                                                         subcategoryIndex,
                                                                         categoryIndex,
                                                                       }) => {
  const {
    handleQuantityChangeMicro,
    handleSubcategoryCheckboxChange,
  } = useMicroFormContext();

  return (
    <Paper
      key={subcategory.categoryID}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 1,
        p: 1,
        borderRadius: 4,
        opacity: subcategory.isChecked ? 1 : 0.5,
      }}
    >
      <CustomCheckboxComponent
        id={subcategory.categoryID.toString()}
        name={subcategory.subcategoryName}
        checked={subcategory.isChecked}
        onChange={() => handleSubcategoryCheckboxChange(categoryIndex, subcategoryIndex)}
      />

      <Typography
        sx={{
          flexGrow: 1,
          textAlign: 'left',
          ml: 2,
        }}
      >
        {subcategory.subcategoryName}
      </Typography>

      <QuantitySelector
        quantity={subcategory.quantitySelected}
        handleQuantityChange={handleQuantityChangeMicro}
        index={categoryIndex}
        subIndex={subcategoryIndex}
        handleInputNumberChange={() => {}}
      />
    </Paper>
  );
};

export default React.memo(MicroListBodyComponent);