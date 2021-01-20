import { Grid, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { profileFreinds } from './profileFriends_style';
import React from 'react'

export const ProfileFriends = React.memo(({ randomUsers, users }) => {
	const classes = profileFreinds();
	return (
		<Grid container justify='center'>
			<p className={classes.profileFreinds__friends}> Friends: {users.length} </p>
			<Grid container className={classes.profileFreinds__friendsContainer}>
				{randomUsers.map((item) => (
					<Grid item xs={4}>
						<Link to={'profile/' + item.id}>
							<Grid container className={classes.profileFreinds__friendItem} direction='column' alignItems='center'>
								<div>
									<Avatar className={classes.profileFreinds__friendAvatar} src={item.photos?.large} />
								</div>
								<div className={classes.profileFreinds__friendName}>{item.name}</div>
							</Grid>
						</Link>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
});
