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
export {
    createUserApi
}