import Axios from "axios";

export const getAllFolders = async (courseId) => {
    let response = null;
    try{
        response = await Axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:5000/api/course/folder/all/${courseId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const createFolder = async (courseId, parentId) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            withCredentials: true,
            url: `http://localhost:5000/api/course/folder/create/${courseId}/${parentId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const changeFolderName = async (courseId, parentId, newName) => {
    let response = null;
    try{
        response = await Axios({
            method: "POST",
            data: {
                name: newName,
            },
            withCredentials: true,
            url: `http://localhost:5000/api/course/folder/name/${courseId}/${parentId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};

export const deleteFolder = async (courseId, parentId) => {
    let response = null;
    try{
        response = await Axios({
            method: "DELETE",
            withCredentials: true,
            url: `http://localhost:5000/api/course/folder/delete/${courseId}/${parentId}`,
          })
    }catch (err){
        throw new Error(err)
    }
  return response;
};


