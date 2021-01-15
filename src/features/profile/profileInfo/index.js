import React from 'react';
import { Button, Grid, Input, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { putNewStatus } from '../../../app/reducers/profile-reducer';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

export const ProfileInfo = ({ routerId }) => {
	const { status, profile } = useSelector((state) => state.profile);
	const authUserId = useSelector(state => state.auth.id)
	const [editMode, setEditMode] = useState(false);
	const [userStatus, setUserStatus] = useState(status);
	const dispatch = useDispatch();
	useEffect(() => {
		setUserStatus(status);
	}, [status]);


	const deactivateMode = (action) => {
		if (!action) {
			setUserStatus(status);
			setEditMode(false);
		} else {
			setEditMode(false);
			dispatch(putNewStatus(userStatus));
		}
	};
	const onStatusChange = (e) => {
		setUserStatus(e.currentTarget.value);
	};


	return (
		// NAME
		<Grid container direction='column'>
			<Grid item xs>
				<Typography variant='h5'>{profile.fullName?.toUpperCase()}</Typography>
			</Grid>
			{/* STATUS */}
			<Grid item>
				{editMode && !routerId ? (
					<div>
						<Input autoFocus={true} onChange={onStatusChange} value={userStatus} />
						<IconButton onClick={() => deactivateMode(true)}>
							<SaveIcon fontSize='small' color='primary' />
						</IconButton>
						<IconButton color='inherit' onClick={() => deactivateMode(false)}>
							<CloseIcon fontSize='small' color='secondary' />
						</IconButton>
					</div>
				) : (
						<Grid>
							<Typography variant='body1' style={{ cursor: 'pointer', color: '#ffc800' }} onClick={() => { setEditMode(true) }} >
								{status}
								{!routerId && <EditIcon fontSize='small' color='inherit' />}
							</Typography>
						</Grid>
					)}
				<hr />
				<Grid item xs={12} md={6}>
					<Typography variant='h6' color={profile?.lookingForAJob ? 'primary' : 'secondary'}>
						{profile?.lookingForAJob ? 'Im looking for a job' : 'Im not looking for a job'}
					</Typography>
				</Grid>
				<hr />
				<Grid item xs={12} md={6}>
					<Typography variant='h5'> About me </Typography>
					<Typography> {profile?.aboutMe} </Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant='h5'> Skills </Typography>
					<Typography>{profile?.lookingForAJobDescription}</Typography>
				</Grid>
			</Grid>
			<Typography variant='h5'> Contacts </Typography>
			<Grid container direction='column'>
				{profile.contacts
					? Object.keys(profile.contacts).map((key) => {
						return (
							profile.contacts[key] && (
								<Grid key={key} item>
									<Button size='small' style={{ color: 'grey' }} href={'//' + profile.contacts[key]}>
										{' '}
										{profile.contacts[key]}{' '}
									</Button>
								</Grid>
							)
						);
					})
					: null}
			</Grid>
		</Grid>
	);
};
