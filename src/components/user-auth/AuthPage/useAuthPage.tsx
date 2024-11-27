import { useState } from "react";
import * as Yup from "yup";
import { useAuthAPI } from "../../../api/useAuthAPI";

export type ErrorState = "empty" | "valid" | { error: string };

export const useAuthPage = (typeAuth: "login" | "register") => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<ErrorState>("empty");
  const [passError, setPassError] = useState<ErrorState>("empty");
  const [nameError, setNameError] = useState<ErrorState>("empty");

  const { loginUser, registerUser } = useAuthAPI();

  const handleNameValidation = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
  ) => {
    validateField("name", name);
  };

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
        if (fieldName === "name") setNameError("empty");
        if (fieldName === "email") setEmailError("empty");
        if (fieldName === "password") setPassError("empty");
        return;
      }

      if (typeAuth === "login") {
        await schemaLogin.validateAt(fieldName, { [fieldName]: value });
      } else {
        await schemaRegister.validateAt(fieldName, { [fieldName]: value });
      }

      if (fieldName === "name") setNameError("valid");
      if (fieldName === "email") setEmailError("valid");
      if (fieldName === "password") setPassError("valid");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        if (fieldName === "name") setNameError({ error: error.message });
        if (fieldName === "email") setEmailError({ error: error.message });
        if (fieldName === "password") setPassError({ error: error.message });
        return;
      }
    }
    return;
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault(); // evita che si ricarichi la pagina quando si invia il form

    if (typeAuth === "register") {
      await validateField("name", name);
    }
    await validateField("email", email);
    await validateField("password", password);

    console.log(password);

    if (
      typeAuth === "login" &&
      emailError === "valid" &&
      passError === "valid"
    ) {
      console.log("login form valido");

      await loginUser(email, password);
    } else if (
      typeAuth === "register" &&
      nameError === "valid" &&
      emailError === "valid" &&
      passError === "valid"
    ) {
      console.log("register form valido");
      await registerUser(name, email, password);
    } else {
      console.log("Ci sono problemi nel form");
    }
  }

  return {
    name,
    nameError,
    setName,
    email,
    emailError,
    setEmail,
    password,
    passError,
    setPassword,
    handleNameValidation,
    handleEmailValidation,
    handlePasswordValidation,
    handleSubmit,
  };
};

let schemaLogin = Yup.object().shape({
  email: Yup.string().email("Email non valida").required("Manca l'email"),
  password: Yup.string()
    .min(7, "password troppo corta")
    .required("Manca la Password"),
});

const schemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(4, "Il nome deve avere almeno 4 caratteri")
    .max(16, "Il nome non può superare i 16 caratteri")
    .required("Il campo Nome è obbligatorio"),

  email: Yup.string()
    .email("Inserisci un'email valida, ad esempio nome@email.com")
    .required("Il campo Email è obbligatorio"),

  password: Yup.string()
    .min(7, "La password deve contenere almeno 7 caratteri")
    .required("Il campo Password è obbligatorio"),
});
