import { useState } from "react";
import * as Yup from "yup";
import { BE_DOMAIN } from "../../config/myenv";
import { useAuthAPI } from "../../api/useAuthAPI";

export type ErrorState = "empty" | "valid" | { error: string };

export const useAuthPage = (typeAuth: "login" | "register") => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<ErrorState>("empty");
  const [passError, setPassError] = useState<ErrorState>("empty");

  const { loginUser } = useAuthAPI();

  const handleEmailValidation = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
  ) => {
    validateField("email", email);
  };
  const handlePasswordValidation = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
  ) => {
    validateField("password", password);
  };

  async function validateField(fieldName: string, value: string) {
    try {
      if (value === "") {
        if (fieldName === "email") setEmailError("empty");
        if (fieldName === "password") setPassError("empty");
        return;
      }

      await schemaLogin.validateAt(fieldName, { [fieldName]: value });

      if (fieldName === "email") setEmailError("valid");
      if (fieldName === "password") setPassError("valid");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        if (fieldName === "email") setEmailError({ error: error.message });
        if (fieldName === "password") setPassError({ error: error.message });
      }
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault(); // evita che si ricarichi lla pagina quando si invia il form

    await validateField("email", email);
    await validateField("password", password);

    if (emailError === "valid" && passError === "valid") {
      console.log("Form valido");
      if (typeAuth === "login") {
        await loginUser(email, password);
      } else {
      }
    } else {
      console.log("Ci sono problemi nel form");
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    handleEmailValidation,
    handlePasswordValidation,
    emailError,
    passError,
  };
};

let schemaLogin = Yup.object().shape({
  email: Yup.string().email("Email non valida").required("Manca l'email"),
  password: Yup.string()
    .min(7, "password troppo corta")
    .required("Manca la Password"),
});

async function fetchTestData() {
  try {
    const response = await fetch(BE_DOMAIN + "/api/test", {
      method: "GET",
    });
    if (!response.ok) throw new Error("Errore nella richiesta");

    const data = await response.json();
    console.log("Dati ricevuti dal backend:", data);
  } catch (error) {
    console.error("Errore nella richiesta al backend:", error);
  }
}
