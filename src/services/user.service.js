import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080";

const getPublicContent = () => {
  return axios.get(API_URL + "/api/test/all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "/api/test/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "/api/test/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "/api/test/admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;
