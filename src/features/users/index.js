import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../app/reducers/users-reducer";



export const Users = () => {
	const users = useSelector (state => state.users.users)
	const dispatch = useDispatch ()
	const getUsers = (page , count) => {
		dispatch(getUsersThunk(page,count))
		console.log(users)
	}
	return (
		<div>
			
			users
			

		</div>
	);
}


