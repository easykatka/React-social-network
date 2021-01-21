import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../app/reducers/profile-reducer';
import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Preloader } from '../../common/preloader';
import { ProfileMain } from './profileMain/profileMain';
import React from 'react';
import { ProfileInfo } from './profileInfo';

const Profile = React.memo(({ match: { params } }) => {
	//TODO обработать ошибки сервера

	const { profile } = useSelector((state) => state.profile);
	const authUserId = useSelector((state) => state.auth.id);
	const routerId = params.userId;
	const profileUserId = routerId || authUserId;
	const dispatch = useDispatch();
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
				<Grid container direction='row' style={{ background: '#36393f', height: 600, padding: 20 }}>
					<Grid item xs>
						<ProfileInfo />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
});
export default withRouter(Profile);
