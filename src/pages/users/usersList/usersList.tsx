import { Preloader2 } from '../../../common/preloader2';
import defaultAvatar from '../../../common/assets/img/defaultAvatar.png';
import { NavLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import { usersList } from './usersList_styles';
import { allUsersItemType } from '../../../common/types/types'
import { FriendButton } from '../../../components/FriendButton/FriendButton';



type PropsType = {
	users: allUsersItemType[],
	isFetching: boolean
}
export const UsersList: React.FC<PropsType> = React.memo(({ users, isFetching }) => {
	const classes = usersList();
	return isFetching ? (
		<Preloader2 />
	) : (
			<Grid container spacing={4} className={classes.usersList__cards}>
				{users.length === 0 && <div className={classes.usersList_notfound}>User not found</div>}
				{users &&
					users
						.map((user) => (
							<Grid item xs={2} key={user.id}>
								<Card>
									<div className={classes.usersList__card}>
										<CardActionArea>
											<NavLink to={'/profile/' + user.id}>
												<CardMedia
													className={classes.usersList__cardmedia}
													image={user?.photos.large || defaultAvatar}
													title='user photo'
												/>
												<CardContent>
													<span className={classes.usersList__name}>{user?.name}</span>
												</CardContent>
											</NavLink>
										</CardActionArea>
									</div>
									<FriendButton id={user.id} followed={user.followed} />
								</Card>
							</Grid>
						))}
			</Grid>
		);
});
