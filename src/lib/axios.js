import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // For local development
    : "https://chat-backend-wuui.onrender.com" + "/api", // For production (use environment variable)
  withCredentials: true,
});
