import { useState } from "react";
import * as Yup from "yup";

export const useAuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateField("email", email);
  };
  const handlePasswordValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateField("password", password);
  };

  async function validateField(fieldName: string, value: string) {
    try {
      await schemaLogin.validateAt(fieldName, { [fieldName]: value });
      if (fieldName === "email") setEmailError("");
      if (fieldName === "password") setPassError("");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        console.log(error.message)
        if (fieldName === "email") setEmailError(error.message);
        if (fieldName === "password") setPassError(error.message);
      }
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    await validateField("email", email);
    await validateField("password", password);
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
