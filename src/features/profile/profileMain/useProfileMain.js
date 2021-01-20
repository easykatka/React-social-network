import { putNewStatus } from '../../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriends } from '../../../app/reducers/users-reducer';
import {randomArray} from '../../../common/randomArray'




export const useProfileMain = () => {
	const [editMode, setEditMode] = useState(false);
	const [userStatus, setUserStatus] = useState(null);
	const { status} = useSelector((state) => state.profile);
	const {users} = useSelector((state) =>state.users)
	const dispatch = useDispatch();
	useEffect(() => {
		setUserStatus(status);
	}, [status]);
	useEffect(() => {
		dispatch(getFriends(true))
	}, []);

	const deactivateMode = (action) => () => { debugger
		if (!action) {
			setUserStatus(status);
			setEditMode(false);
		} else {
			setEditMode(false);
			dispatch(putNewStatus(userStatus));
		}
	};
	const onStatusChange = (e) => {
		setUserStatus(e.currentTarget.value);
	};
	const randomUsers = users && randomArray (users, 6);

	return [onStatusChange,deactivateMode,editMode,setEditMode,userStatus,status ,users,randomUsers]
}