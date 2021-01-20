import { profileMain } from './profileMain_styles';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Avatar, InputBase } from '@material-ui/core';
import { useProfileMain } from './useProfileMain';
import { useDispatch } from 'react-redux';
import { ProfileFriends } from './profileFriends/profileFriends';
import React from 'react'

export const ProfileMain = React.memo(({ profile, routerId }) => {
	const [onStatusChange, deactivateMode, editMode, setEditMode, userStatus, status, users, randomUsers] = useProfileMain();
	const classes = profileMain();
	console.log(randomUsers);

	return (
		<Grid container className={classes.profileMain__container} direction='column' justify='space-around'>
			<Avatar className={classes.profileMain__avatar} alt='user foto' src={profile.photos?.large} />
			<Grid container justify='center' alignItems='center' direction='column' spacing={1}>
				<Grid item className={classes.profileMain__name}>
					{profile.fullName?.toUpperCase()}
				</Grid>
				<Grid item>
					{editMode && !routerId ? (
						<Grid component='form' onSubmit={deactivateMode(true)}>
							<InputBase autoFocus={true} onChange={onStatusChange} value={userStatus} />
							<IconButton onClick={deactivateMode(true)}>
								<SaveIcon fontSize='small' color='primary' />
							</IconButton>
							<IconButton color='inherit' onClick={deactivateMode(false)}>
								<CloseIcon fontSize='small' color='secondary' />
							</IconButton>
						</Grid>
					) : (
						<Grid item>
							<span
								variant='body1'
								className={classes.profileMain__status}
								onClick={() => {
									setEditMode(true);
								}}>
								{status}
								<span>{!routerId && <EditIcon className={classes.profileMain__editIcon} color='inherit' />}</span>
							</span>
						</Grid>
					)}
				</Grid>
			</Grid>

			<Grid item>
				<ProfileFriends randomUsers={randomUsers} users={users} />
			</Grid>
		</Grid>
	);
})