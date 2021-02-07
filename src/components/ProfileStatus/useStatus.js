import { updateStatus } from '../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import {  useAppDispatch } from '../../app/store';

export const useStatus = () => {
	const [editMode, setEditMode] = useState(false);
	const [userStatus, setUserStatus] = useState('');
	const status = useSelector((state) => state.profile.status);

	const dispatch = useAppDispatch();
	useEffect(() => {
		setUserStatus(status);
	}, [status]);


	const deactivateMode = (action) => () => {
		if (!action) {
			setUserStatus(status);
			setEditMode(false);
		} else {
			setEditMode(false);
			dispatch(updateStatus(userStatus));
		}
	};
	const onStatusChange = (e => {
		setUserStatus(e.target.value);
	})


	return [onStatusChange, deactivateMode, editMode, setEditMode, userStatus, status]
}