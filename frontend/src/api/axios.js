import axios from "axios";

const API_BASE ="http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // 🔒 Important for cookies
});

export default api;
