import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/typography.css";
import "./styles/myMeasures.css";
import { AuthContextProvider } from "./components/user-auth/useAuthContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <StrictMode>
        <div  style={{ userSelect: "none" }}>
          <ToastContainer />
          <App/>
        </div>
    </StrictMode>
  </AuthContextProvider>,
);
