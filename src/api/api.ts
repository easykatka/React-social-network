import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "ca0951c1-2a9d-481e-a273-3d5f60141d92"}
})


export enum ResultCodes {
    Success = 0,
    Error = 1,

}

export enum ResultCodesCaptcha {
    CaptchaIsRequired = 10

}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodes> = {
    data: D
    messages: Array<string>
    resultCode: RC
}