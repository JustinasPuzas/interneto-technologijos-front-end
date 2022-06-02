import Axios from "axios";

export const updateCourseName = async (courseName, courseId) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
                courseId: courseId,
                name: courseName,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/course/name",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const updateCourseAbout = async (courseAbout, courseId) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
                courseId: courseId,
                about: courseAbout,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/course/about",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const updateCoursePhoto = async (coursePhoto, courseId) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
                courseId: courseId,
                photoLink: coursePhoto,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/course/photo",
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};