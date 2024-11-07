import { v4 as uuidv4 } from "uuid";
import { UserFE, UserLoginFE } from "../common/user-interfaces";
import { BE_DOMAIN } from "../../myenv";

const DEVICE_ID_KEY_NAME = "deviceId";

export function getOrCreateDeviceID(): string {
  let deviceId: string | null = localStorage.getItem(DEVICE_ID_KEY_NAME);
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem(DEVICE_ID_KEY_NAME, deviceId);
  }
  return deviceId;
}

export async function loginUser(email_u: string, password_u: string) {
  const deviceId = getOrCreateDeviceID();
  const userLoginInfo: UserLoginFE = {
    email: email_u,
    password: password_u,
    uuid: deviceId,
  };
  try {
    const response = await fetch(BE_DOMAIN + "/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginInfo),
    });

    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Errore nel login:", error);
  }
}

export function registerUser() {}
