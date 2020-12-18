import {instance} from "./api";


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },
    unFollowAPI(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data) 
    }
}