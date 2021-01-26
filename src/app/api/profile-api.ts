import { instance } from "./api";
import { resultCodeEnum, responseResultObject, photosType, profileDataType } from "../../common/types/types";

export const profileAPI = {
	getProfile(userId: number | null) {
		return instance.get<responseGetUserProfile>(`profile/` + userId).then((res) => res.data);
	},
	getStatus(userId: number | null) {
		return instance.get<string>(`profile/status/` + userId).then((res) => res.data); //запрос статуса отдельно с сервера
	},
	updateStatus(status: string) {
		return instance
			.put<responseResultObject>(`profile/status/`, { status: status })
			.then((res) => res.data);
	},
	updateAvatar(photo: File) {
		const formData = new FormData();
		formData.append("image", photo);
		return instance.put<responseUpdatePhoto>(`profile/photo`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then((res) => res.data);
	},
	getFollowStatus(userId: number | null) {
		return instance.get<responseResultObject>(`follow/${userId}`).then(res => res.data)
	},

	updateProfile(profile: profileDataType) {
		return instance.put<responseUpdatePhoto>(`profile`, profile).then((res) => res.data);
	},
};

//типы
type responseGetUserProfile = {
	userId: number
	aboutMe: string | null
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string
	photos: photosType
	contacts: {
		facebook: string | null
		instagram: string | null
		vk: string | null
		github: string | null
		mainLink: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
	}
}
type responseUpdatePhoto = {
	data: {
		photos: photosType
	}
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: resultCodeEnum
}
