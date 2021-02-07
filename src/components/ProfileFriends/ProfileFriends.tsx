import { Grid, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { profileFreinds } from './profileFriends_style';
import React from 'react'
import { randomArray } from '../../common/randomArray';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { allUsersItemType } from '../../common/types/types';
import { useAppDispatch } from '../../app/store';
import { getFriends, setFilter } from '../../app/reducers/users-reducer';

export const ProfileFriends: React.FC = React.memo(() => {
	const users = useSelector((state: RootState) => state.users.users)
	const randomUsers = randomArray(users, 6) as allUsersItemType[];
	const dispatch = useAppDispatch()
	React.useEffect(() => {dispatch(getFriends('true')) }
	
		, []);
	const classes = profileFreinds();
	return (
		<Grid container justify='center'>
			<p className={classes.friendsLabel}> Friends: <Link onClick={() => dispatch(setFilter({ friend: 'true' }))} to={`/users`}>{users.length}</Link> </p>
			<Grid container className={classes.friendsWrapper}>
				{randomUsers.map((item) => (
					<Grid item xs={4} key={item.id} >
						<Link to={`/profile/${item.id}`}>
							<Grid container className={classes.friendItemWrapper} >
								<div>
									<Avatar className={classes.avatar} src={item.photos?.large} />
								</div>
								<div className={classes.name}>{item.name}</div>
							</Grid>
						</Link>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
});
