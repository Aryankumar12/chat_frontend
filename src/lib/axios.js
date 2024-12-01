import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // For local development
    : import.meta.env.VITE_API_URL + "/api", // For production (use environment variable)
  withCredentials: true,
});
