import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, putNewAvatar, setUserProfile } from '../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { Avatar, Button, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import { ProfileEditForm } from './profileEditForm';
import { ProfileInfo } from './profileInfo/index';
import { Preloader } from '../../common/preloader';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import { FriendButton } from '../../common/friendButton';
import { ProfileMain } from './profileMain/profileMain';
import React from 'react'

const useStyles = makeStyles((theme) => ({
	avatar__block: {
		padding: theme.spacing(2),
		borderRadius: theme.spacing(1),

		'&>*': { width: '100%' },
	},
	userInfo__block: {
		padding: theme.spacing(2),
	},
	useInfo__status: {
		width: '100%',
		justifyContent: 'left',
		textTransform: 'none',
	},
	avatar_img: {
		borderRadius: theme.spacing(1),
		width: '100%',
		height: '100%',
		marginBottom: theme.spacing(1),
	},
}));
const Profile = React.memo((({match:{params}}) => {
	//TODO обработать ошибки сервера
	const classes = useStyles();
	const { profile, formEdit } = useSelector((state) => state.profile);
	const authUserId = useSelector((state) => state.auth.id);
	const routerId = params.userId;
	const profileUserId = routerId || authUserId;
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	// устанавливаем юзера ,демонтируем юзера
	useEffect(() => {
		if (profileUserId) dispatch(getUserProfile(profileUserId));
		return () => dispatch(setUserProfile(null));
	}, [dispatch, profileUserId]);
	if (!profile) {
		return <Preloader />;
	}

	return (
		<Grid container direction='row' justify='center'>
			<Grid item xs={4}>
				<ProfileMain profile={profile} routerId={routerId} />
			</Grid>
			<Grid item xs={8}>
				1
			</Grid>
		</Grid>
	);

	// return (
	// 	<>
	// 		<Typography style={{ textAlign: 'center' }} variant='h5'>
	// 			Profile{' '}
	// 		</Typography>
	// 		<Grid container spacing={2}>
	// 			{/* левый блок */}
	// 			<Grid item xs={3}>
	// 				<Paper className={classes.avatar__block} elevation={0}>
	// 					<Avatar className={classes.avatar_img} alt='user foto' src={profile.photos?.large} />
	// 					{routerId ? (
	// 						<div>
	// 							<FriendButton id={routerId} followed={profile.followed} />
	// 							<Link to={`/messenger/${routerId}`}>
	// 								<Button color='secondary' fullWidth variant='contained' style={{ marginTop: 6 }}>
	// 									PM
	// 								</Button>
	// 							</Link>
	// 						</div>
	// 					) : (
	// 						<div>
	// 							<input
	// 								accept='image/*'
	// 								className={classes.input}
	// 								id='contained-button-file'
	// 								multiple
	// 								type='file'
	// 								style={{ display: 'none' }}
	// 								onChange={(e) => dispatch(putNewAvatar(e.target.files[0]))}
	// 							/>
	// 							<label htmlFor='contained-button-file'>
	// 								<IconButton variant='contained' color='primary' component='span'>
	// 									<AddAPhotoOutlinedIcon />
	// 								</IconButton>
	// 							</label>
	// 							{formEdit || (
	// 								<IconButton color='secondary' variant='contained' onClick={() => setEditMode(true)}>
	// 									<SettingsSharpIcon />
	// 								</IconButton>
	// 							)}
	// 						</div>
	// 					)}
	// 				</Paper>
	// 			</Grid>
	// 			{/* правый блок */}
	// 			<Grid item xs={5}>
	// 				<Paper className={classes.userInfo__block}>
	// 					{editMode ? <ProfileEditForm setEditMode={setEditMode} /> : <ProfileInfo routerId={routerId} />}
	// 				</Paper>
	// 			</Grid>
	// 		</Grid>
	// 	</>
	// );
	}))
export default withRouter(Profile);
