import { UsersList } from '../../components/UsersList/UsersList';
import { UsersFilter } from '../../components/UsersFilter/UsersFilter';
export const UsersPage = () => {
	;
	return (
		<>	<div style={{ background: '#2f3136', borderRadius: "0px 0px 15px 15px", height: 600, position: 'relative' }}>
			<UsersFilter />
			<UsersList/>
		</div>
		</>
	);
};
