import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../../app/reducers/users-reducer';
import React from 'react';
import { RootState } from '../../app/store';

interface IProps {
	id: number,
	followed: boolean
}
//
export const FriendButton: React.FC<IProps> = ({ id, followed }) => {
	const followingInProgress = useSelector((state: RootState) => state.users.followingInProgress);
	const dispatch = useDispatch();
	console.log(id, followingInProgress)

	return (
		<Button
			color={followed ? 'secondary' : 'primary'}
			fullWidth
			variant='contained'
			disabled={followingInProgress.some((item) => item === id)}
			onClick={() => {
				dispatch(followUser(+id, followed));
			}}>
			{followed ? 'Unfriend' : 'Friend'}
		</Button>
	);
};

