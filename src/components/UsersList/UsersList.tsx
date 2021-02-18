import { Preloader3 } from '../../common/preloader3';
import defaultAvatar from '../../common/assets/img/defaultAvatar.png';
import { NavLink } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { usersList } from './usersList_styles';
import { FriendButton } from '../CustomFriendButton/FriendButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const UsersList: React.FC = () => {
	const users = useSelector((state: RootState) => state.users.users)
	const isFetching = useSelector((state: RootState) => state.users.isFetching)
	const classes = usersList();
	return isFetching ? (
		<Preloader3 />
	) : (
			<Grid container direction='row' justify='center' className={classes.root} >
				{users.length === 0 && <div className={classes.notfound}>User not found</div>}
				{users && users
					.map((user) => (
						<Grid item xs={4} md={4} lg={4}>
							<Grid container direction='row'
								justify='space-between' className={classes.userWrapper}>
								<NavLink to={'profile/' + user.id}>
									<Grid container direction='row' alignItems='center' >
										<Avatar className={classes.avatar}
											src={user?.photos.large || defaultAvatar} />
										<p className={classes.name}>{user?.name}</p>
									</Grid>
								</NavLink>
								<FriendButton id={user.id} followed={user.followed} className={classes.friendBtn} />
							</Grid>
						</Grid>
					))}
			</Grid >
		);
}
