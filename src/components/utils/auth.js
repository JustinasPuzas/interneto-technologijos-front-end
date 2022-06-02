import Axios from "axios";

export const register = async (userName, email, password) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
              userName,
              email,
              password,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/auth/register",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const getUser = async () => {
    let response = null;
    try{
        response = await Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/api/auth/user",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const login = async (email, password) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
              username: email,
              password: password
            },
            withCredentials: true,
            url: "http://localhost:5000/api/auth/login",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const logout = async () => {
  let response = null;
  try{
      response = await Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/api/auth/logout",
        })
  }catch (err){
      throw new Error(err)
  }
return response;
};

