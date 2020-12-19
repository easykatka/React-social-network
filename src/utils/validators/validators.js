




export const required = (value) => (value ? undefined : 'Field is required')




export const maxLengthCreator = (maxLength) => (value) => {
	if(value.length > maxLength) return `max length is ${maxLength} symbols`
	return undefined
}