import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/v2",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized");
      localStorage.removeItem("access");

      if (typeof window !== "undefined") {
        window.location.href = "/sign-in/cover";
      }
    }
    return Promise.reject(error);
  }
);

export default API;
