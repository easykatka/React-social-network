import React from 'react'
import { Grid, Input, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { putNewStatus } from '../../../app/reducers/profile-reducer'

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
			<Grid container alignItems='center' justify='space-between'>
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
			</div>
		</>
	)
}
const Contact = ({ contactTitle, contactValue }) => {
	return <div>{contactValue}</div>
}
