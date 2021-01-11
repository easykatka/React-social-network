import React from 'react'
import { Grid, Input, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { putNewStatus } from '../../../app/reducers/profile-reducer'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import { Link } from 'react-router-dom'

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
	const deactivateMode = () => {
		setEditMode(false)
		dispatch(putNewStatus(userStatus))
	}
	const onStatusChange = e => {
		setUserStatus(e.currentTarget.value)
	}

	return (
		<>
			<Grid
				style={{
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
				}}>
				<Typography variant='h4'>Profile info</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography variant='h4'>{profile?.fullName}</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant='h6' color={profile?.lookingForAJob ? 'primary' : 'secondary'}>
							{profile?.lookingForAJob ? 'Im looking for a job' : 'Im not looking for a job'}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						{editMode && !routerId ? (
							<div>
								<Input autoFocus={true} onChange={onStatusChange} value={userStatus} />
								<IconButton onClick={deactivateMode}>
									<SaveIcon fontSize='small' color='primary' />
								</IconButton>
							</div>
						) : (
							<Typography variant='h6' onClick={activateMode}>
								{status}
							</Typography>
						)}
					</Grid>
					<Grid item xs={12} md={6}>
					<Typography> {profile?.aboutMe}  </Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography> {profile?.lookingForAJobDescription} </Typography>
					</Grid>
				</Grid>
				<hr/>
				<Typography variant='h5'> Contacts </Typography>
				<Grid container spacing={3}>
					{profile
						? Object.keys(profile.contacts).map(key => {
								return (
									profile.contacts[key] && (
										<Grid key={key} item xs={12} md={6}>
											<a href=""> {profile.contacts[key]} </a>
										</Grid>
									)
								)
						  })
						: null}
				</Grid>
				<Grid container justify='space-around' style={{ marginTop: '20px' }}></Grid>
			</Grid>
			{/* <Grid container alignItems='center' justify='space-between'>
				<Typography variant='h4'>{profile?.fullName}</Typography>
				<Typography variant='h6' color={profile?.lookingForAJob ? 'primary' : 'secondary'}>
					{profile?.lookingForAJob ? 'Im looking for a job' : 'Im not looking for a job'}
				</Typography>
			</Grid>
			<div>
				{editMode && !routerId ? (
					<Input autoFocus={true} onChange={onStatusChange} onBlur={deactivateMode} value={userStatus} />
				) : (
					<Typography variant='h6' onClick={activateMode}>
						{status}{' '}
					</Typography>
				)}
			</div>

			<div>
				<hr />
				<Typography>My skills:{profile?.lookingForAJobDescription} </Typography>
				<hr />
				<Typography>About me :</Typography> {profile?.aboutMe}
				<hr />
				<Typography variant='h6'>Contacts :</Typography>
				{profile
					? Object.keys(profile?.contacts).map(key => {
							return profile.contacts[key] ? (
								<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
							) : null
					  })
					: null}
			</div> */}
		</>
	)
}
