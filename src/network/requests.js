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
  
      const { access, refresh, role } = response.data;
  
      return {
        accessToken: access,
        refreshToken: refresh,
        user: { role, email },
      };
    } catch (error) {
      console.error("Sign In Error:", error.response?.data || error.message);
      throw error.response?.data || error;
    }
  };