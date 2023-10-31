import axios from "axios";

const api = axios.create({
  baseURL: "https://motors-shop-projeto-final-fullstack.onrender.com",
  timeout: 5000
});

export default api;
