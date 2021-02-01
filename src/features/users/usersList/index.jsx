import { Preloader2 } from '../../../common/preloader2';
import defaultAvatar from '../../../common/assets/img/defaultAvatar.png';
import { NavLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { FriendButton } from '../../../common/friendButton';

const useStyles = makeStyles((theme) => ({
	users__name: {
		color: 'black',
		fontSize: 15,
		textAlign: 'center',
	},
	users__cards: {
		overflowY: 'scroll',
		width: '100%',
		height: 430,
		paddingLeft: 30,
	},
	users__card: {
		height: 150,
		backgroundColor:'grey',

		'&>:hover': {
			background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
		},
	},
	users__cardmedia: {
		height: 90,
	},
}));

export const UsersList = React.memo(({ users, isFetching }) => { 
	const classes = useStyles();
	return isFetching ? (
		<Preloader2 />
	) : (
		<Grid container spacing={4} className={classes.users__cards}>
			{users.length === 0 && <div style={{ color: 'white', textAlign: 'center', fontSize: 50, margin: '0 auto' }}>User not found</div>}
			{users &&
				users
					// .filter((u) => u.photos.small != null)
					.map((user) => (
						<Grid item xs={2} key={user.id}>
							<Card>
								<div className={classes.users__card}>
									<CardActionArea>
										<NavLink to={'/profile/' + user.id}>
											<CardMedia
												className={classes.users__cardmedia}
												image={user?.photos.large || defaultAvatar}
												title='user photo'
											/>
											<CardContent>
												<span className={classes.users__name}>{user?.name}</span>
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
