import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4002",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authorization");
  if (token) config.headers.Authorization = token;
  return config;
});
