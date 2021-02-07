import { Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/store';
import { setPost } from '../../app/reducers/profile-reducer';
import { ProfilePosts } from '../ProfilePost/ProfilePosts';
import { profileWall } from './profileWall_styles';
import React from 'react'
import { ChatInput } from '../ChatInput/ChatInput';




export const ProfileWall: React.FC = React.memo(() => {
	const userId = useSelector((state: RootState) => state.profile.authUser.userId);
	const dispatch = useAppDispatch();
	const classes = profileWall()
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => {
			dispatch(
				setPost({
					userId: userId,
					body: message,
					date: new Date().toJSON(),
					likesCount: 0,
					isLiked: false,
				})
			);
			resetForm();
		},
	});
	console.log('render')
	return (
		<Grid className={classes.root}>
			<ChatInput onChange={handleChange} handleSubmit={handleSubmit} value={values.message} />
			<ProfilePosts />
		</Grid>
	);
});
