import React from 'react';
import { Checkbox, FormControlLabel, Grid, IconButton, Radio } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';

export const ProfileInfo = () => {
	const { profile } = useSelector((state) => state.profile);

	const isContacts = Object.values(profile.contacts).find((i) => !!i);
	console.log(isContacts);
	return (
		<Grid container direction='column' alignItems='center' justify='space-around' style={{ height: 600, padding: 20 }}>
			{profile?.lookingForAJob && (
				<Grid item xs={3} style={{ color: 'grey', textAlign: 'center' }}>
					<h2 style={{ color: 'white' }}>About me:</h2>
					<p>{profile?.aboutMe}</p>
				</Grid>
			)}
			{profile?.lookingForAJobDescription && (
				<Grid item xs={3} s style={{ color: 'grey', textAlign: 'center' }}>
					<h2 style={{ color: 'white' }}> Skills: </h2>
					<p>{profile?.lookingForAJobDescription}</p>
					

					<FormControlLabel
						value='best'
						control={<Radio checked={profile?.lookingForAJob} color='primary' disabled />}
						label='Looking for a job'
					/>
				</Grid>
			)}
			{isContacts && (
				<Grid item xs={3} style={{ color: 'grey', textAlign: 'center' }}>
					<h2 style={{ color: 'white' }}>Contacts:</h2>
					<p>
						{profile.contacts &&
							Object.keys(profile.contacts).map((key) => {
								//роутер убирает двоеточие,поэтому пока что так
								let str = profile.contacts[key] !== null && profile.contacts[key].replace(/(^\w+:|^)\/\//, '');
								return (
									profile.contacts[key] && (
										<Grid key={key} item>
											<a href={`//${str}`}> {profile.contacts[key]} </a>
										</Grid>
									)
								);
							})}
					</p>
				</Grid>
			)}{' '}
			<IconButton color='secondary' style={{ marginBottom: 20 }} variant='contained'>
				<SettingsSharpIcon />
			</IconButton>
		</Grid>
	);
};
