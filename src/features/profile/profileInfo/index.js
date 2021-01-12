import React from 'react'
import { Grid, Input, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { putNewStatus } from '../../../app/reducers/profile-reducer'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import CloseIcon from '@material-ui/icons/Close';


export const ProfileInfo = ({ routerId }) => {
	const status = useSelector(state => state.profile.status)
	const profile = useSelector(state => state.profile.profile)
	const [editMode, setEditMode] = useState(false)
	const [userStatus, setUserStatus] = useState(status)
	const dispatch = useDispatch()
	useEffect(() => {
		setUserStatus(status)
	}, [status])

	const activateMode = () => {
		setEditMode(true)
	}
	const deactivateMode = (action) => {
		if (!action) {
			setUserStatus(status)
			setEditMode(false)
		} else {
			setEditMode(false)
			dispatch(putNewStatus(userStatus))
		}

	}
	const onStatusChange = e => {
		setUserStatus(e.currentTarget.value)
	}

	return (
		<>
			<Grid
				style={{
					alignItems: 'center',
				}}>
				<Grid container spacing={2} >
					<Grid item xs={12} md={6}>
						<Typography variant='h4'>
							{profile?.fullName}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography style={{ textAlign: 'right' }} variant='h6' color={profile?.lookingForAJob ? 'primary' : 'secondary'}>
							{profile?.lookingForAJob ? 'Im looking for a job' : 'Im not looking for a job'}
						</Typography>
					</Grid>
					<Grid item xs={12} >
						{editMode && !routerId ?
							<div>
								<Input autoFocus={true} onChange={onStatusChange} value={userStatus} />
								<IconButton onClick={() => deactivateMode(true)}>
									<SaveIcon fontSize='small' color='primary' />
								</IconButton>
								<IconButton color='inherit' onClick={() => deactivateMode(false)}>
									<CloseIcon fontSize='small' color='secondary' />
								</IconButton>
							</div>
							: (
								<Grid>
									<Typography variant='h5' style={{ cursor: 'pointer' }} onClick={activateMode} >
										<NewReleasesIcon fontSize='small' color='primary' />
										{status}
									</Typography>

								</Grid>
							)}
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant='h5'> About me </Typography>
						<Typography> {profile?.aboutMe}  </Typography>
					</Grid>
					<Grid item xs={12} md={6} style={{ marginBottom: '80px' }}>
						<Typography variant='h5'> My skills </Typography>
						<Typography>
							{profile?.lookingForAJobDescription}
						</Typography>
					</Grid>
				</Grid>
				<Typography variant='h5'> Contacts </Typography>
				<Grid container spacing={3} >
					{profile
						? Object.keys(profile.contacts).map(key => {
							return (
								profile.contacts[key] && (
									<Grid key={key} item xs={12} md={6}>
										<a style={{ color: 'grey' }} href="123"> {profile.contacts[key]} </a>
									</Grid>
								)
							)
						})
						: null}
				</Grid>
				<Grid container justify='space-around' style={{ marginTop: '20px' }}></Grid>
			</Grid>

		</>
	)
}
