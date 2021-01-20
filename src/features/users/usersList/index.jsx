
import { Preloader } from '../../../common/preloader';
import defaultAvatar from '../../../assets/img/defaultAvatar.png';
import { NavLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FriendButton } from '../../../common/friendButton';

const useStyles = makeStyles((theme) => ({
	users__name: {
		color: 'black',
		'&:hover': { color: '#61dafb' },
	},
	users__cards: {
		overflowY: 'scroll',
		height: '72vh',
	},
	users__card: {
		'&>:hover': {
			background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
		},
	},
	users__cardmedia: {
		height: 200,
	},
}));

export const UsersList = React.memo(({ users, isFetching }) => {
	const classes = useStyles();
	return isFetching ? (
		<Preloader />
	) : (
		<Grid container spacing={2} className={classes.users__cards}>
			{users &&
				users
					// .filter((u) => u.photos.small != null)
					.map((user) => (
						<Grid item xs={6} md={4} lg={3} key={user.id}>
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
												<Typography className={classes.users__name} variant='h5' component='h2'>
													{user?.name}
												</Typography>
												<Typography variant='body2' color='textSecondary' component='p'>
													{/* {user?.status || '😡'}{' '} */}
												</Typography>
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
