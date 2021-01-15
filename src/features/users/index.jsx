import { UsersList } from './usersList';
import { UsersFilter } from './usersFilter';
import { useSelector } from 'react-redux';
export const Users = () => {
	const { users, isFetching } = useSelector((state) => state.users);
	const { currentPage, pageSize, totalUsersCount, filter } = useSelector((state) => state.users);

	return (
		<>
			<UsersFilter currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount} filter={filter} />
			<UsersList users={users} isFetching={isFetching} />
		</>
	);
};
