import {PhotosType, ProfileType} from "../types/types";
import {instance, APIResponseType} from "./api";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res =>res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId).then(res =>res.data)           //запрос статуса отдельно с сервера
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res =>res.data) // инфа о айди в куки,поэтому не
        // нужно его указывать
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(res =>res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(res =>res.data)
    }

}

type SavePhotoResponseDataType = {
    photos : PhotosType
}