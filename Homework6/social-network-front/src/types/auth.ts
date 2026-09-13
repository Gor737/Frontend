import type { User } from "./account";

export type SignUptype = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export type SignInType = Omit<SignUptype, "firstName" | "lastName">;

export type SignInRes = {
  message: string;
  token: string;
  endpoint: string;
};

export type SignUpRes = {
  message: string;
};

export type AuthContextType = {
    user: User | null;
    loading: boolean;
    onLogout: () => void;
    updateUser: () => void;
}