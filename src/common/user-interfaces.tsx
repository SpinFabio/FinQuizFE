export interface UserDB {
  id?: number;
  name: string;
  email: string;
  pwhash: string;
  created_at?: string;
  updated_at?: string;
  role: string;
}

export interface UserFE {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
  uuid?: string;
  accessToken?: string;
}

export interface UserLoginFE {
  email: string;
  password: string;
  uuid: string;
}

export interface UserRequest {
  name: string;
  password: string;
  email: string;
}
