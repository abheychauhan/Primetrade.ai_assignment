import axios from "axios";

const API_BASE ="https://primetrade-ai-assignment-ow01.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // 🔒 Important for cookies
});

export default api;
