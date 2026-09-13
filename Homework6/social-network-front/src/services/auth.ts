import type { GetUserRes } from "../types/account";
import type { SignInRes, SignInType, SignUpRes, SignUptype } from "../types/auth";
import { api } from "./api";

export const signIn = async (data: SignInType) => {
  try {
    const response = await api.post<SignInRes>(
      "/auth/signin",
      data,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const signUp = async (data: SignUptype) => {
  try {
    const response = await api.post<SignUpRes>(
      "/auth/signup",
      data,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getUser = async () => {
    try{
        const response = await api.get<GetUserRes>('/auth/user');
        return response.data;
    }catch(err){
        throw err;
    }
}