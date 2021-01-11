import {  useSelector } from 'react-redux'


export const Users = () => {
	const users = useSelector(state => state.users.users)
	// const dispatch = useDispatch()
	// const getUsers = (page, count) => {
	// 	dispatch(getUsers(page, count))
	// 	console.log(users)
	
	return (
	<div>{users}</div>
	)
}
