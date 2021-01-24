import React from 'react';
import { FormControlLabel, Grid, IconButton, Radio } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';

export const ProfileInfo = ({ setEditForm, routerId }) => {
	const { profile } = useSelector((state) => state.profile);

	//! при добавлении друга и переходе на профайл ошибка
	const isContacts = profile.contacts && Object.values(profile.contacts).find((i) => !!i);
	const editHandler = () => {
		setEditForm(true);
	};
	return (
		<Grid container direction='column' alignItems='center' justify='space-around' style={{ height: 600, maxWidth: 200, padding: 2 }}>
			{profile?.aboutMe && (
				<Grid item style={{ color: 'grey', textAlign: 'center' }}>
					<h2 style={{ color: 'white' }}>About me:</h2>
					<p>{profile?.aboutMe}</p>
				</Grid>
			)}
			{profile?.lookingForAJobDescription && (
				<Grid item style={{ color: 'grey', textAlign: 'center' }}>
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
				<Grid item style={{ color: 'grey', textAlign: 'center' }}>
					<h2 style={{ color: 'white' }}>Contacts:</h2>
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
				</Grid>
			)}{' '}
			{!routerId && (
				<Grid item>
					<IconButton color='secondary' variant='contained' onClick={editHandler}>
						<SettingsSharpIcon />
					</IconButton>
				</Grid>
			)}
		</Grid>
	);
};
