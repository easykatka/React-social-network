import { UsersList } from '../../components/UsersList/UsersList';
import { UsersFilter } from '../../components/UsersFilter/UsersFilter';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
export const UsersPage = () => {
	const { users, isFetching } = useSelector((state: RootState) => state.users);
	return (
		<>	<div style={{ background: '#2f3136', borderRadius: "0px 0px 15px 15px", height: 600, position: 'relative' }}>
			<UsersFilter />
			<UsersList users={users} isFetching={isFetching} />
		</div>
		</>
	);
};
