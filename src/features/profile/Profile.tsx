import { useSelector } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Preloader2 } from '../../common/preloader2';
import { ProfileMain } from './profileMain/profileMain';
import { ProfileInfo } from './profileInfo/profileInfo';
import { ProfileEditForm } from './profileInfo/profileEditForm/profileEditForm';
import { ProfileWall } from './profileWall/profileWall';
import { RootState } from '../../app/store';
import { useAppDispatch } from './../../app/store';
import { profileStyles } from './profile_styles'

const Profile: React.FC = ({ match }: any) => {
	//TODO обработать ошибки сервера
	const authUserId = useSelector((state: RootState) => state.auth.id);
	const routerId = match.params.userId;
	const profileUserId = routerId || authUserId;
	const dispatch = useAppDispatch();
	const [editForm, setEditForm] = useState(false);
	const classes = profileStyles();
	const { profile } = useSelector((state: RootState) => state.profile);

	useEffect(
		() => {
			if (profileUserId) dispatch(getUserProfile(profileUserId));
		}, [dispatch, profileUserId]);

	return (
		<div className={classes.profileStyles__container}>
			{!profile ? (<Preloader2 />) : (
				<>
					<Grid item xs={4}>
						<ProfileMain routerId={routerId} />
					</Grid>
					<Grid item xs={8} style={{ height: 600 }}>
						{editForm ? (
							<ProfileEditForm setEditForm={setEditForm} />) : (
								<>
									<Grid container>
										<Grid>
											<ProfileInfo routerId={routerId} setEditForm={setEditForm} />
										</Grid>
										<Grid xs>
											<ProfileWall />
										</Grid>
									</Grid>
								</>
							)}
					</Grid>
				</>
			)}
		</div>
	);
};
export default withRouter(Profile);
