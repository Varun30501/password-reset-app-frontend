import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-app-backend-x6oo.onrender.com/api/auth", // backend link
});

export default API;
