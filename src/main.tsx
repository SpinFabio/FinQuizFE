import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/typography.css";
import "./styles/myMeasures.css";
import { AuthContextProvider } from "./hooks/useAuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  
    <AuthContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthContextProvider>
  
);
