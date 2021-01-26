import { profileMain } from './profileMain_styles';
import { Button, Grid } from '@material-ui/core';
import { ProfileFriends } from './profileFriends/profileFriends';
import { ProfileAvatar } from './profileAvatar/profileAvatar';
import React from 'react';
import { ProfileStatus } from './profileStatus/profileStatus';
import { FriendButton } from '../../../common/friendButton';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

type PropsType = {
	routerId: number
}

export const ProfileMain: React.FC<PropsType> = React.memo(({routerId }) => {
	const { profile } = useSelector((state: RootState) => state.profile);
	const classes = profileMain();
	return (
		<Grid container className={classes.profileMain__container} direction='column' justify='space-around'>
			<ProfileAvatar profile={profile} routerId={routerId} />
			<Grid item className={classes.profileMain__name}>
				{profile.fullName?.toUpperCase()}
			</Grid>
			<Grid>
				{' '}
				<ProfileStatus routerId={routerId} />
			</Grid>
			{!routerId ? (
				<Grid item className={classes.profileMain__footer}>
					<ProfileFriends />
				</Grid>
			) : (
					<Grid item>
						{routerId && (
							<div>
								<div className={classes.profileMain__profileFriendBtn}>
									<FriendButton id={routerId} followed={profile.followed} />
								</div>
								<div >
									<Link to={`/messenger/${routerId}`}>
										<Button color='primary' variant='contained' className={classes.profileMain__profilePmBtn} >
											White a message
									</Button>
									</Link>
								</div>
							</div>
						)}
					</Grid>
				)}
		</Grid>
	);
});
