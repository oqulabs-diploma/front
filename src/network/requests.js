import API from "./api";

// регистрация
export const register = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Sign Up Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// логин
export const login = async (email, password) => {
  try {
    const response = await API.post("/login", { email, password });

    if (response.data?.access) {
      localStorage.setItem("access", response.data.access);
    }

    if (response.data?.refresh) {
      localStorage.setItem("refresh", response.data.refresh);
    }

    return response.data;
  } catch (error) {
    console.error("Sign In Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
