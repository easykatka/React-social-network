import { Grid, Avatar } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { profileFreinds } from './profileFriends_style';
import React from 'react'
import { randomArray } from '../../../../common/randomArray';
import { useSelector } from 'react-redux';

export const ProfileFriends = React.memo(() => {
	const {users} = useSelector((state) =>state.users)
	const randomUsers = users && randomArray (users, 6);
	const classes = profileFreinds();
	return (
		<Grid container justify='center'>
			<p className={classes.profileFreinds__friendsLabel}> Friends: <Link to={`/users`}>{users.length}</Link> </p>
			<Grid container className={classes.profileFreinds__friendsContainer}>
				{randomUsers.map((item) => (
					<Grid item xs={4}>
						<Link to={`/profile/${item.id}`}>
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
