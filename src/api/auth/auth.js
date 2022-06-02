import axios from "axios";
const api = "http://localhost:5000/api";

export const loginUser = async (data) => {
  try {
    console.log("Login", data)
    return await axios.post(`${api}/auth/login`, data);
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (data) => {
  try {
    
    console.log("Register", data)
    return await axios.post(`${api}/auth/register`, data);
  } catch (err) {
    console.log(err);
  }
};
