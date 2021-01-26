import { Grid, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { profileFreinds } from './profileFriends_style';
import React from 'react'
import { randomArray } from '../../../../common/randomArray';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { allUsersItemType } from '../../../../common/types/types';

export const ProfileFriends:React.FC = React.memo(() => {
	const { users } = useSelector((state: RootState) => state.users)
	const randomUsers = users && randomArray(users, 6) as allUsersItemType[];
	const classes = profileFreinds();
	return (
		<Grid container justify='center'>
			<p className={classes.profileFreinds__friendsLabel}> Friends: <Link to={`/users`}><div>{users.length}</div></Link> </p>
			<Grid container className={classes.profileFreinds__friendsContainer}>
				{randomUsers.map((item) => (
					<Grid item xs={4} key={item.id} >
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
