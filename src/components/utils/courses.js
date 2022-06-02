import Axios from "axios";

export const createCourse = async () => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
              
            },
            withCredentials: true,
            url: "http://localhost:5000/api/course/create",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const getCourses = async () => {
    let response = null;
    try{
        response = await Axios({
            method: "GET",
            data: {
            },
            withCredentials: true,
            url: "http://localhost:5000/api/course/all",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const getCourse = async (courseId) => {
    let response = null;
    console.log(`GetCourse`)
    try{
        response = await Axios({
            method: "POST",
            data: {
                courseId: courseId,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/course/get",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};