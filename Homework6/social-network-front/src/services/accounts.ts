import type { BioType, ChangePassword } from "../types/account";
import { api } from "./api"

export const changePassword = async (pass:ChangePassword) => {
    try{
        const response = await api.patch('/account/settings/password', pass);
        return response.data;
    }catch(err){
        throw err;
    }
}

export const changePrivacy = async () => {
    try{
        const response = await api.patch('/account/privacy');
        return response.data;
    }catch(err){
        throw err;
    }
}

export const changeBio = async (data:BioType) => {
    try{
        const response = await api.patch('/account/bio', data);
        return response.data;
    }catch(err) {
        throw err;
    }
}

export const changeAvatar = async (file:File) => {
    try{
        const formData = new FormData()
        formData.append('profile-pic', file);
        const response = await api.patch('/account/avatar', formData);
        return response.data;
    }catch(err){
        throw err;
    }
}