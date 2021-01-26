export enum resultCodeEnum {
	success = 0,
	error = 1,
	captcha = 10
}

export type loginUserData = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

export type profileDataType = {
	userId: number
	aboutMe: string | null
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string | null
	followed: boolean
	photos: photosType
	contacts: {
		[facebook: string]: string | null
		instagram: string | null
		vk: string | null
		github: string | null
		mainLink: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
	}
}


export type responseResultObject = {
	data: {}
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: resultCodeEnum
}
export type photosType = {
	large: string
	small: string
}
export type usersSearchType = {
	currentPage: number,
	pageSize: number,
	searchTerm: string,
	friend: string,
}
export type allUsersItemType = {
	followed: boolean
	id: number
	name: string
	photos: photosType
	status: null | string
	uniqueUrlName: null | string
}
export type dialogsArrayType = {
	hasNewMessages: boolean
	id: number
	lastDialogActivityDate: string
	lastUserActivityDate: string
	newMessagesCount: number
	photos: photosType
	userName: string
}

export type messagesArrayType = {
	addedAt: string
	body: string
	deletedByRecipient?: boolean
	deletedBySender?: boolean
	distributionId?: number | null
	id: string
	isSpam?: boolean
	recipientId: number
	recipientName?: string
	senderId: number
	senderName: string
	translatedBody: null
	viewed?: boolean
}
export type postType = {
	userId: number | null
	date: string
	body: string
	likesCount: number
	isLiked: boolean
}


