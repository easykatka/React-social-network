import { Preloader2 } from '../../../common/preloader2';
import defaultAvatar from '../../../common/assets/img/defaultAvatar.png';
import { NavLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import { usersList } from './usersList_styles';
import { allUsersItemType } from '../../../common/types/types'
import { FriendButton } from '../../../components/CustomFriendButton/FriendButton';



interface IProps {
	users: allUsersItemType[],
	isFetching: boolean
}
export const UsersList: React.FC<IProps> = React.memo(({ users, isFetching }) => {
	const classes = usersList();
	return isFetching ? (
		<Preloader2 />
	) : (
			<Grid container spacing={4} className={classes.root}>
				{users.length === 0 && <div className={classes.notfound}>User not found</div>}
				{users &&
					users
						.map((user) => (
							<Grid item xs={2} key={user.id}>
								<Card>
									<div className={classes.card}>
										<CardActionArea>
											<NavLink to={'/profile/' + user.id}>
												<CardMedia
													className={classes.cardmedia}
													image={user?.photos.large || defaultAvatar}
													title='user photo'
												/>
												<CardContent>
													<span className={classes.name}>{user?.name}</span>
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
