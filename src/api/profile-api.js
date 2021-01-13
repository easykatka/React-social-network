import { instance } from "./api";

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId).then((res) => res.data);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId).then((res) => res.data); //запрос статуса отдельно с сервера
	},
	putNewStatus(status) {
		return instance
			.put(`profile/status`, { status: status })
			.then((res) => res.data);
	},

	putNewAvatar(file) {
		const formData = new FormData();
		formData.append("image", file);
		return instance
			.put(`profile/photo`, formData, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((res) => res.data);
	},
	getFollowStatus(userId) {
		return instance.get(`follow/${userId}`).then(res => res.data)
	},

	saveProfile(profile) {
		return instance.put(`profile`, profile).then((res) => res.data);
	},
};
