import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../../app/reducers/users-reducer';
import React from 'react';
import { RootState } from '../../app/store';

interface IProps {
	id: number,
	followed: boolean,
	className?: any,
}
//
export const FriendButton: React.FC<IProps> = ({ id, followed, ...props }) => {
	const followingInProgress = useSelector((state: RootState) => state.users.followingInProgress);
	const dispatch = useDispatch();
	return (
		<Button
			{...props}
			color={followed ? 'secondary' : 'primary'}
			variant='contained'
			disabled={followingInProgress.some((item) => item === id)}
			onClick={() => {
				dispatch(followUser(+id, followed));
			}}>
			{followed ? 'Unfriend' : 'Friend'}
		</Button>

	);
};

