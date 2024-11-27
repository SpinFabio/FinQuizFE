import * as Yup from "yup";

export interface AuthBodyReqRes {
  message?: string;
  accessToken: string;
}
export interface UserFE {
  // è il contenuto dell' access token che viene riconvertito in informazioni JSON
  id: number;
  name: string;
  email: string;
  role: string;
}

//--------------------- cose Legate all'Autenicazione ----------------------------

export interface UserRequest {
  // interfaccia per la richiesta iniziale del Login o del Register
  name?: string;
  password: string;
  email: string;
  uuid: string;
}

export const userLoginRequestSchema = Yup.object({
  email: Yup.string().email().required("L'email è obbligatoria"),
  password: Yup.string()
    .min(8, "La password deve essere almeno di 8 caratteri")
    .required("La password è obbligatoria"),
  uuid: Yup.string().required("L'UUID è obbligatorio"),
  name: Yup.string().optional(),
});

export const userRegisterRequestSchema = Yup.object({
  email: Yup.string().email().required("L'email è obbligatoria"),
  password: Yup.string()
    .min(8, "La password deve essere almeno di 8 caratteri")
    .required("La password è obbligatoria"),
  uuid: Yup.string().required("L'UUID è obbligatorio"),
  name: Yup.string()
    .min(3, "Il nome è troppo corto")
    .max(16, "Il nome è troppo lungo")
    .required("Il nome è obbligatorio"),
});

export const authBodyReqResSchema = Yup.object({
  message: Yup.string(),
  accessToken: Yup.string().required("Manca l'accessToken"),
});
