import React from "react";
import { Outlet } from "react-router-dom";
import ThreeModComponent from "../../components/old/ThreeModComponent/ThreeModComponent.tsx";
import { buttonConfigs } from "../../components/old/ThreeModComponent/buttonConfigData.ts";
import { Box } from "@mui/material";
import { trainingHomeHook } from "./TrainingHomeHooks.tsx";

const TrainingHomePage: React.FC = () => {
  const { currentMode, handleModeChange } = trainingHomeHook();

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <ThreeModComponent
        buttonConfigs={buttonConfigs}
        handleModeChange={handleModeChange}
        currentMode={currentMode}
      />

      <Outlet />
    </Box>
  );
};

export default TrainingHomePage;
