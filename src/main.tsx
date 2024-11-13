import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";
import "./styles/typography.css";
import "./styles/myMeasures.css";
import { AuthContextProvider } from "./hooks/useAuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <StrictMode>
        <CssBaseline />
        <App />
      </StrictMode>
    </AuthContextProvider>
  </ThemeProvider>,
);
