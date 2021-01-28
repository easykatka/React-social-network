import React, { Dispatch } from 'react';
import { FormControlLabel, Grid, IconButton, Radio } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import { RootState } from '../../../app/store';
import { profileInfoStyles } from './profileInfo_styles'




type PropsType = {
	setEditForm: Dispatch<boolean>
	routerId: number
}
export const ProfileInfo: React.FC<PropsType> = React.memo(({ setEditForm, routerId }) => {
	console.log('render info')
	const  profile  = useSelector((state: RootState) => state.profile.profile);
	const isContacts = profile.contacts && Object.values(profile.contacts).find((i) => !!i);
	const classes = profileInfoStyles();
	const editHandler = () => {
		setEditForm(true);
	};
	return (
		<Grid container className={classes.profileInfo__container}>
			{profile?.aboutMe && (
				<Grid item>
					<p className={classes.profileInfo__label}>About me:</p>
					<p>{profile?.aboutMe}</p>
				</Grid>
			)}
			{profile?.lookingForAJobDescription && (
				<Grid item >
					<p className={classes.profileInfo__label}> Skills: </p>
					<p>{profile?.lookingForAJobDescription}</p>

					<FormControlLabel
						value='best'
						control={<Radio checked={profile?.lookingForAJob} color='primary' disabled />}
						label='Looking for a job'
					/>
				</Grid>
			)}
			{isContacts && (
				<Grid item >
					<p className={classes.profileInfo__label}>Contacts:</p>
					{profile.contacts &&
						Object.keys(profile.contacts).map((key) => {
							return (
								profile.contacts[key] && (
									<Grid key={key} item>
										<a href={`//${profile.contacts[key]}`}>
											{profile.contacts[key]} </a>
									</Grid>
								)
							);
						})}
				</Grid>
			)}
			{!routerId && (
				<Grid item>
					<IconButton onClick={editHandler} color='secondary'>
						<SettingsSharpIcon />
					</IconButton>
				</Grid>
			)}
		</Grid>
	);
});
