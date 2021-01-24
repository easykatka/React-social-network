import { responseResultObject ,allUsersItemType } from "../types/types";
import { instance } from "./api";


export const usersAPI = {
	getUsers(currentPage: number, pageSize: number, searchTerm: string, friend: string) {
		return instance.get<responseGetUsers>(`users?page=${currentPage}&count=${pageSize}&term=${searchTerm}&friend=${friend}`)
			.then(res => res.data)
	},
	followAPI(userId: number) {
		return instance.post<responseResultObject>(`follow/${userId}`).then(res => res.data)
	},
	unFollowAPI(userId: number) {
		return instance.delete<responseResultObject>(`follow/${userId}`).then(res => res.data)
	}
}

//типы
type responseGetUsers = {
	error: boolean
	items: Array<allUsersItemType>
	totalCount: number
}