import { Avatar, Grid, IconButton, InputBase } from '@material-ui/core';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { RootState } from '../../../app/store';
import { useAppDispatch } from './../../../app/store';
import { setPost } from '../../../app/reducers/profile-reducer';
import { ProfilePosts } from './profilePost/profilePosts';
import { profileWall } from './profileWall_styles';
import classes from '*.module.css';



export const ProfileWall: React.FC = () => {
	const { authUser, profile } = useSelector((state: RootState) => state.profile);
	const dispatch = useAppDispatch();
	const classes = profileWall()
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			body: '',
		},
		onSubmit: ({ body }) => {
			dispatch(
				setPost({
					userId: authUser.userId,
					body: body,
					date: new Date().toJSON(),
					likesCount: 0,
					isLiked: false,
				})
			);
			resetForm();
		},
	});

	return (
		<Grid className={classes.profileWall__container}>
			<Grid
				container
				direction='row'
				alignItems='center'
				className={classes.profileWall__content}>
				<Avatar src={authUser.photos?.small} />
				<Grid item xs component='form' style={{ marginLeft: 20 }} onSubmit={handleSubmit}>
					<InputBase
						placeholder='White something'
						type='text'
						onChange={handleChange}
						color='primary'
						name='body'
						className={classes.profileWall__input}
						value={values.body}
						endAdornment={
							<IconButton type='submit'>
								<SendRoundedIcon color='inherit' fontSize='small' />
							</IconButton>
						}
					/>
				</Grid>
			</Grid>
			<ProfilePosts />
		</Grid>
	);
};
