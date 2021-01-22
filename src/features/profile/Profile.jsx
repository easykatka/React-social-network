import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Preloader2 } from '../../common/preloader2';
import { ProfileMain } from './profileMain/profileMain';
import React from 'react';
import { ProfileInfo } from './profileInfo/profileInfo';
import { ProfileEditForm } from './profileInfo/profileEditForm/profileEditForm';
import { ProfileWall } from './profileWall/profileWall';

const Profile = React.memo(({ match: { params } }) => {
	//TODO обработать ошибки сервера

	const { profile } = useSelector((state) => state.profile);
	const authUserId = useSelector((state) => state.auth.id);
	const routerId = params.userId;
	const profileUserId = routerId || authUserId;
	const dispatch = useDispatch();
	const [editForm, setEditForm] = useState(false);
	// устанавливаем юзера ,демонтируем юзера
	useEffect(() => {
		if (profileUserId) dispatch(getUserProfile(profileUserId));
		return () => dispatch(setUserProfile(null));
	}, [dispatch, profileUserId]);

	return (
		<Grid
			container
			direction='row'
			justify='center'
			style={{ backgroundColor: '#36393f', borderRadius: '15px', position: 'relative', width: '100%', height: 600 }}>
			{!profile ? (
				<Preloader2 />
			) : (
				<>
					<Grid item xs={4}>
						<ProfileMain profile={profile} routerId={routerId} />
					</Grid>
					<Grid item xs={8}>
						<Grid container direction='row' style={{ height: 600 }}>
							<Grid item>
								{editForm ? (
									<ProfileEditForm setEditForm={setEditForm} />
								) : (
									<ProfileInfo routerId={routerId} setEditForm={setEditForm} />
								)}
							</Grid>
							<Grid item xs>
								<ProfileWall />
							</Grid>
						</Grid>
					</Grid>
				</>
			)}
		</Grid>
	);
});
export default withRouter(Profile);
