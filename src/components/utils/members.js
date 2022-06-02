import Axios from "axios";
export const addStudent = async (courseId, email) => {
    let response = null
    console.log(email)
    try{
        response = await Axios({
            method: "POST",
            data: {
                email: email
            },
            withCredentials: true,
            url: `http://localhost:5000/api/course/member/add/${courseId}`,
          })
    }catch (err){
        throw new Error(err)
    }
    console.log(response)
  return response;
};

export const removeStudent = async (courseId, studentId) => {
    let response = null
    try{
        response = await Axios({
            method: "DELETE",
            withCredentials: true,
            url: `http://localhost:5000/api/course/member/remove/${courseId}/${studentId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
}

export const promoteMember = async (courseId, studentId) => {
    let response = null
    try{
        response = await Axios({
            method: "POST",
            withCredentials: true,
            url: `http://localhost:5000/api/course/member/promote/${courseId}/${studentId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
}

export const demoteMember = async (courseId, studentId) => {
    let response = null
    try{
        response = await Axios({
            method: "DELETE",
            withCredentials: true,
            url: `http://localhost:5000/api/course/member/demote/${courseId}/${studentId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
}

export const getAllStudents = async (courseId) => {
    console.log(`getAll1`)
    let response = null;
    try{
        response = await Axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:5000/api/course/member/all/${courseId}`,
          })
    }catch (err){
        throw new Error(err)
    }
    console.log(response)
  return response;
};