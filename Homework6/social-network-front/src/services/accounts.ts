import type {
  BioType,
  ChangePassword,
  createPostRes,
  createPostType,
  FollowRequestsRes,
  GetPostInfoRes,
  GetUserProfileRes,
  PostInfo,
  SearchUsersRes,
} from "../types/account";
import { api } from "./api";

export const changePassword = async (pass: ChangePassword) => {
  try {
    const response = await api.patch("/account/settings/password", pass);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const changePrivacy = async () => {
  try {
    const response = await api.patch("/account/privacy");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const changeBio = async (data: BioType) => {
  try {
    const response = await api.patch("/account/bio", data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const changeAvatar = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("profile-pic", file);
    const response = await api.patch("/account/avatar", formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const SearchUser = async (text: string) => {
  try {
    console.log(text);
    const response = await api.get<SearchUsersRes>(`/account/search/${text}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getUserProfile = async (username: string) => {
  try {
    const response = await api.get(`/account/${username}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const followUser = async (id: number) => {
  try {
    const response = await api.post(`/follow/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getFollowRequests = async () => {
  try {
    const response = await api.get<FollowRequestsRes>("/follow/requests");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const acceptFollowRequest = async (id: number) => {
  try {
    const response = await api.patch(`/follow/requests/accept/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const declineFollowRequest = async (id: number) => {
  try {
    const response = await api.patch(`/follow/requests/decline/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createPost = async (data: FormData) => {
  try {
    const response = await api.post<createPostRes>("/posts", data);
    return response.data;
  } catch (err) {
    throw err;
  }
};


export const getPostInfo = async(id:number) => {
    try{
        const response = await api.get<GetPostInfoRes>(`/posts/${id}`);
        return response.data;
    }catch(err){
        throw err;
    }
}

export const deletePost = async(id:number) => {
    try{
        const response = await api.delete(`/posts/${id}`);
        return response.data;
    }catch(err){
        throw err;
    }
}