import axios from "./axios.customize";
const createUserApi=(fullName, email,passWord,phoneNumber)=>{
        const URL_BACKEND = "/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: passWord,
            phone: phoneNumber,
        }       
        return axios.post(URL_BACKEND, data);
}
const fetchAllUsersApi=()=>{
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}
const updateUserApi=(_id,fullName,phone)=>{
        const URL_BACKEND = "/api/v1/user";
        const data = {
            _id:_id,
            fullName: fullName,
            phone: phone,
        }       
        return axios.put(URL_BACKEND, data);
}
const deletedUserApi=(_id)=>{
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND);
}
const handleUpLoadFile=(file, folder)=>{
    const URL_BACKEND = "/api/v1/file/upload";
    let config = {
        headers: {
            "upload-type":folder,
            "Content-Type": "multipart/form-data"
        }
    } 
    const data = new FormData();
    data.append("fileImg", file);
    
    return axios.post(URL_BACKEND, data, config);
}
    const updateUserApiWithAvatar=(_id,fullName,phone, avatar)=>{
        const URL_BACKEND = "/api/v1/user";
        const data = {
            _id:_id,
            fullName: fullName,
            phone: phone,
            avatar: avatar,
        }       
        return axios.put(URL_BACKEND, data);
}
export {
    createUserApi, fetchAllUsersApi, updateUserApi, deletedUserApi, handleUpLoadFile, updateUserApiWithAvatar
}