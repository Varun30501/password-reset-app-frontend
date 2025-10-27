import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-app-backend-xqyw.onrender.com/api/auth", // backend link
});

export default API;
