import { useSelector } from 'react-redux';
import { getUserProfile, setIsError } from '../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Preloader2 } from '../../common/preloader2';
import { ProfileMain } from './profileMain/profileMain';
import { ProfileInfo } from './profileInfo/profileInfo';
import { ProfileEditForm } from './profileInfo/profileEditForm/profileEditForm';
import { ProfileWall } from './profileWall/profileWall';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/store';
import { profileStyles } from './profile_styles'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;

}
const haha = 23

const Profile: React.FC = ({ match }: any) => {
	//TODO обработать ошибки сервера
	const authUserId = useSelector((state: RootState) => state.auth.id);
	const routerId = match.params.userId;
	const profileUserId = routerId || authUserId;
	const dispatch = useAppDispatch();
	const [editForm, setEditForm] = useState(false);
	const classes = profileStyles();
	const isLoading = useSelector((state: RootState) => state.profile.isLoading);
	const isError = useSelector((state: RootState) => state.profile.isError);

	useEffect(
		() => {
			if (profileUserId) dispatch(getUserProfile(profileUserId))
		}, [dispatch, profileUserId]);

	const handleClose = () => {
		dispatch(setIsError(''))
	};

	return (
		<div className={classes.profileStyles__container}>
			<Snackbar open={!!isError} autoHideDuration={5000} onClose={handleClose} >
				<Alert onClose={handleClose} severity="error">
					Fetch error
				</Alert>
			</Snackbar>
			{isLoading ? (<Preloader2 />) : (
				<>
					<Grid item xs={4}>
						<ProfileMain routerId={routerId} />
					</Grid>
					<Grid item xs={8} className={classes.profileStyles__rightblock}>
						{editForm ? (
							<ProfileEditForm setEditForm={setEditForm} />) : (
								<>
									<Grid container>
										<Grid>
											<ProfileInfo routerId={routerId} setEditForm={setEditForm} />
										</Grid>
										<Grid item xs>
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
