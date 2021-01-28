import { UsersList } from './usersList';
import { UsersFilter } from './usersFilter';
import { useSelector } from 'react-redux';
export const Users = () => {
	const { users, isFetching } = useSelector((state) => state.users);
	return (
		<>	<div style={{background: '#2f3136',borderRadius:15,height:600,position:'relative'}}>
			<UsersFilter />
			<UsersList users={users} isFetching={isFetching} />
			</div>
		</>
	);
};
