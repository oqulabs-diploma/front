import axios from "axios";

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error("API error:", error?.response?.data || error.message);
    throw error;
  }
};

// Users
export const getUsers = () => handleRequest(axiosInstance.get("/users"));

export const createUser = (user) => handleRequest(axiosInstance.post("/users", user));

export const updateUser = (id, user) => handleRequest(axiosInstance.put(`/users/${id}`, user));

export const deleteUser = (id) => handleRequest(axiosInstance.delete(`/users/${id}`));
