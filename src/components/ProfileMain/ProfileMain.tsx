import { profileMain } from './profileMain_styles';
import { Button, Grid } from '@material-ui/core';
import { ProfileFriends } from '../ProfileFriends/ProfileFriends';
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar';
import React from 'react';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { FriendButton } from '../CustomFriendButton/FriendButton';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

type IProps = {
	routerId: number
}

export const ProfileMain: React.FC<IProps> = ({ routerId }) => {
	const profile = useSelector((state: RootState) => state.profile.profile);

	const classes = profileMain();
	return (
		<Grid container className={classes.root} direction='column' justify='space-around'>
			<ProfileAvatar profile={profile} routerId={routerId} />
			<Grid item className={classes.fullName}>
				{profile.fullName?.toUpperCase()}
			</Grid>
			<Grid>
				{' '}
				<ProfileStatus routerId={routerId} />
			</Grid>
			{!routerId ? (
				<Grid item className={classes.friends}>
					<ProfileFriends />
				</Grid>
			) : (
					<Grid item>
						{routerId && (
							<div>
								<div className={classes.friendButton}>
									<FriendButton id={routerId} followed={profile.followed} />
								</div>
								<div >
									<Link to={`/messenger/${routerId}`}>
										<Button color='secondary' variant='contained' className={classes.pmButton} >
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
};
