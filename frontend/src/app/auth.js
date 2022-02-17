import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const API_URL = "http://localhost:8000/api/users/";

export const register = async (userData) => {
  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};
