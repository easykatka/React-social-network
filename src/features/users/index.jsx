import { UsersList } from './usersList';
import { UsersFilter } from './usersFilter';
import { useSelector } from 'react-redux';
export const Users = () => {
	const { users, isFetching } = useSelector((state) => state.users);
	return (
		<>
			<UsersFilter  />
			<UsersList users={users} isFetching={isFetching} />
		</>
	);
};
