import axios from "axios";
import { appConfig } from "@shared/config/appConfig";

export const api = axios.create({
  baseURL: appConfig.API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error); 
  } 
);