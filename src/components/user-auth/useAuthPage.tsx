import { useState } from "react";
import * as Yup from "yup";

export type ErrorState = "empty" | "valid" | { error: string };

export const useAuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<ErrorState>("empty");
  const [passError, setPassError] = useState<ErrorState>("empty");

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
        return
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
    e.preventDefault();

    await validateField("email", email);
    await validateField("password", password);

    console.log("Stato attuale:");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Email Error:", emailError);
    console.log("Password Error:", passError);

    if (!emailError && !passError) {
      console.log("form inviato con successo");
    } else {
      console.log("ci sono problemi nel form");
    }

    console.log(`ecco qui ${email} \n ${password}`);
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
