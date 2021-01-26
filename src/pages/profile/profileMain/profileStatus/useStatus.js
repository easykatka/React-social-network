import { updateStatus } from '../../../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriends } from '../../../../app/reducers/users-reducer';





export const useStatus = () => {
	const [editMode, setEditMode] = useState(false);
	const [userStatus, setUserStatus] = useState(null);
	const { status } = useSelector((state) => state.profile);
	const { users } = useSelector((state) => state.users)

	const dispatch = useDispatch();
	useEffect(() => {
		setUserStatus(status);
	}, [status]);
	useEffect(() => {
		dispatch(getFriends(true))
	}, []);

	const deactivateMode = (action) => () => {
		if (!action) {
			setUserStatus(status);
			setEditMode(false);
		} else {
			setEditMode(false);
			dispatch(updateStatus(userStatus));
		}
	};
	const onStatusChange = (e) => {
		setUserStatus(e.currentTarget.value);
	};


	return [onStatusChange, deactivateMode, editMode, setEditMode, userStatus, status, users]
}