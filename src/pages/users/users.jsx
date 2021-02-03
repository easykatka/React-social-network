import { UsersList } from './usersList/usersList';
import { UsersFilter } from './usersFilter/usersFilter';
import { useSelector } from 'react-redux';
export const Users = () => {
	const { users, isFetching } = useSelector((state) => state.users);
	return (
		<>	<div style={{background: '#2f3136',borderRadius:"0px 0px 15px 15px",height:600,position:'relative'}}>
			<UsersFilter />
			<UsersList users={users} isFetching={isFetching} />
			</div>
		</>
	);
};
