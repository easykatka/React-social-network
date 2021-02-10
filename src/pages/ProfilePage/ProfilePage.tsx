import { useSelector } from 'react-redux';
import { getUserProfile, setIsError } from '../../app/reducers/profile-reducer';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Preloader3 } from '../../common/preloader3';
import { ProfileMain } from '../../components/ProfileMain/ProfileMain';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
import { ProfileEditForm } from '../../components/ProfileEditForm/ProfileEditForm';
import { ProfileWall } from '../../components/ProfileWall/ProfileWall';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/store';
import { profileStyles } from './profile_styles'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProfilePage: React.FC = ({ match }: any) => {
	//TODO обработать ошибки сервера
	const authUserId = useSelector((state: RootState) => state.auth.id);
	const routerId = match.params.userId;
	const profileUserId = routerId || authUserId;
	const dispatch = useAppDispatch();
	const [editForm, setEditForm] = useState(false);
	const classes = profileStyles();
	const isLoading = useSelector((state: RootState) => state.profile.isLoading);
	const isError = useSelector((state: RootState) => state.profile.isError);

	useEffect(() => {
		profileUserId && dispatch(getUserProfile(profileUserId))
	}, [dispatch, profileUserId])

	const handleClose = () => {
		dispatch(setIsError(''))
	};

	if (isLoading || 0) {
		return <div className={classes.root}>
			<Preloader3 />
		</div>
	}

	return (
		<div className={classes.root}>
			<Snackbar open={!!isError} autoHideDuration={5000} onClose={handleClose} >
				<Alert onClose={handleClose} severity="error">
					Fetch error
				</Alert>
			</Snackbar>
			<Grid item xs={4}>
				<ProfileMain routerId={routerId} />
			</Grid>
			<Grid item xs={8} className={classes.rightBlockWrapper}>
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
		</div>
	);
};
export default withRouter(ProfilePage);
