import { Avatar, Checkbox, FormControlLabel, Grid, IconButton, InputBase } from '@material-ui/core';
import { Favorite, FavoriteBorder, FavoriteBorderOutlined } from '@material-ui/icons';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { setLike, setPost } from '../../../app/reducers/profile-reducer';
import { dateHelper } from '../../../common/dateHelper';

export const ProfileWall = ({ profile, routerId }) => {
	const { authUser, posts } = useSelector((state) => state.profile);
	const dispatch = useDispatch();
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
		<Grid style={{ backgroundColor: '#2f3136', height: 600, padding: 30 }}>
			<Grid
				container
				direction='row'
				alignItems='center'
				style={{ backgroundColor: '#202225', marginBottom: 20, color: 'white', padding: 10, width: '100%', borderRadius: 8 }}>
				<Avatar src={authUser?.photos.small} />
				<Grid item xs component='form' style={{ marginLeft: 20 }} onSubmit={handleSubmit}>
					<InputBase
						placeholder='White something'
						type='text'
						onChange={handleChange}
						color='primary'
						name='body'
						style={{ width: '95%', marginLeft: 20 }}
						value={values.body}
						endAdornment={
							<IconButton type='submit'>
								<SendRoundedIcon color='inherit' fontSize='small' />
							</IconButton>
						}
					/>
				</Grid>
			</Grid>
			<div
				style={{
					overflowY: 'auto',
					height: 450,
					width: '100%',
				}}>
				<div
					style={{
						overflowY: 'auto',
						paddingRight: 30,
						color: 'grey',
						display: 'flex',
						flexDirection: 'column-reverse',
						justifyContent: 'flex-end',
						overflowY: 'auto',
						width: '100%',
					}}>
					{posts?.map((item, idx) => {
						return (
							<div
								key={item.date}
								style={{ width: '100%', display: 'flex', backgroundColor: '#202225', padding: 10, marginTop: 20 }}>
								<Avatar src={item.userId ? authUser?.photos.small : profile?.photos.small} style={{ marginRight: 20 }} />
								<div>
									<p>{dateHelper(item.date, 0)}</p>
									<p style={{ width: '100%' }}>{item.body}</p>
									<hr />
									<Grid container alignItems='center'>
										<FormControlLabel
											onChange={(e) => dispatch(setLike({ like: e.target.checked, idx }))}
											control={
												<Checkbox checked={item.isLiked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name='checkedH' />
											}
											label={item.likesCount}
										/>
									</Grid>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Grid>
	);
};
