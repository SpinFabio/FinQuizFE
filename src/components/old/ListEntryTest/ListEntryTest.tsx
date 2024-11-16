import React, { useState, ChangeEvent, useEffect } from "react";
import { Box, Checkbox } from "@mui/material";
import { ButtonConfig } from "../ThreeModComponent/buttonConfigData.ts";

interface ListEntryTestInterface {
  button: ButtonConfig;
}

const ListEntryTest: React.FC<ListEntryTestInterface> = ({ button }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    console.log("list item" + button.text);
  });

  return (
    <Box
      sx={{
        display: "flex",

        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 2,
        backgroundColor: "primary.main", // Colore di sfondo primary.main
        borderColor: "primary.main", // Colore del bordo primary.main
      }}
    >
      <Checkbox checked={isChecked} onChange={handleChange} />
      {button.text}
    </Box>
  );
};

export default ListEntryTest;
