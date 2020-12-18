import axios from "axios";

export const instance = axios.create({
    withCredentials: true,             //? withCredentials() makes your browser include cookies and authentication headers in your XHR request.
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "ca0951c1-2a9d-481e-a273-3d5f60141d92"}
})


