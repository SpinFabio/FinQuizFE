import { createContext, ReactNode, useContext, useState } from "react";

export interface AuthTypes {
  accessToken: string;
  setAccessToken: (at: string) => void;
}

export function useAuth(): AuthTypes {
  const [accessToken, setAccessToken] = useState("");

  return {
    accessToken,
    setAccessToken,
  };
}

export const AuthContext = createContext<AuthTypes | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be within a AuthContext.Provider");
  }
  return context;
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
