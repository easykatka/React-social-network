//типизация валидатора
export type FieldValidatorType = (value:string) => string | undefined




export const required:FieldValidatorType = (value) => (value ? undefined : 'Field is required')




export const maxLengthCreator = (maxLength:number):FieldValidatorType => (value) => {
	if(value.length > maxLength) return `max length is ${maxLength} symbols`
	return undefined
}