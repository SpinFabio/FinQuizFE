import { v4 as uuidv4 } from "uuid";
import {
  userLoginRequestSchema,
  userRegisterRequestSchema,
  UserRequest,
} from "../common/user-interfaces";
import { BE_DOMAIN } from "../config/myenv";
import { ValidationError } from "yup";
import { unauthFetch } from "./fetch-utils";

const DEVICE_ID_KEY_NAME = "deviceId";

export function getOrCreateDeviceID(): string {
  let deviceId: string | null = localStorage.getItem(DEVICE_ID_KEY_NAME);
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem(DEVICE_ID_KEY_NAME, deviceId);
  }
  return deviceId;
}

export function useAuthAPI() {
  async function loginUser(email_u: string, password_u: string): Promise<void> {
    const deviceId = getOrCreateDeviceID();
    const userLoginInfo: UserRequest = {
      email: email_u,
      password: password_u,
      uuid: deviceId,
    };

    try {
      await userLoginRequestSchema.validate(userLoginInfo, {
        abortEarly: false,
      });
      await unauthFetch(BE_DOMAIN + "/api/user/login", "POST", userLoginInfo);
      
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error("Errore di validazione", error.errors);
      } else {
        console.error("Errore nel login:", error);
      }
    }
  }

  async function registerUser(
    name_u: string,
    email_u: string,
    password_u: string,
  ): Promise<void> {
    const deviceId = getOrCreateDeviceID();
    const userRegisterInfo: UserRequest = {
      email: email_u,
      password: password_u,
      uuid: deviceId,
      name: name_u,
    };
    try {
      await userRegisterRequestSchema.validate(userRegisterInfo, {
        abortEarly: false,
      });
      await unauthFetch(
        BE_DOMAIN + "/api/user/register",
        "POST",
        userRegisterInfo,
      );
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log("Errore di validazione", error.errors);
      } else {
        console.log("Errore nell'autenticazione:", error);
      }
    }
  }

  return {
    loginUser,
    registerUser,
  };
}
