import { Grid, TextField, Checkbox, FormControlLabel, IconButton } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { putNewProfile } from '../../../../app/reducers/profile-reducer';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

//TODO починить конект формы , сделать валидацию для контактов
export const ProfileEditForm = ({ setEditForm }) => {
	const { profile } = useSelector((state) => state.profile);
	const dispatch = useDispatch();
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: profile,
		onSubmit: (e) => {
			dispatch(putNewProfile(e));
			setEditForm(false);
		},
	});
	const editHandler = () => {
		setEditForm(false);
	};

	const contactsName = ['vk', 'facebook', 'github'];

	return (
		<Grid
			container
			component='form'
			onSubmit={handleSubmit}
			direction='column'
			alignItems='center'
			justify='space-between'
			style={{  padding: 15 ,height:600 , width:'100%'}}>
			<Grid item style={{ color: 'grey', textAlign: 'center' }}>
				<h2 style={{ color: 'white' }}> Name: </h2>
				<TextField
					type='text'
					required
					value={values?.fullName}
					onChange={handleChange}
					placeholder={'Enter your name'}
					id='fullName'
					size='small'
				/>
			</Grid>
			<Grid item  style={{ color: 'grey', textAlign: 'center' }}>
				<h2 style={{ color: 'white' }}> About: </h2>
				<TextField rowsMax={2} required type='text' value={values?.aboutMe} multiline onChange={handleChange} id='aboutMe' />
			</Grid>
			<Grid item  style={{ color: 'grey', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
				<h2 style={{ color: 'white' }}> Skills: </h2>
				<TextField
					type='text'
					size='small'
					multiline
					rowsMax={2}
					required
					value={values?.lookingForAJobDescription}
					onChange={handleChange}
					id='lookingForAJobDescription'
				/>
				<FormControlLabel
					labelPlacement='start'
					control={
						<Checkbox size='small' checked={values?.lookingForAJob} onChange={handleChange} color='primary' id='lookingForAJob' />
					}
					label='Are you looking for a job?'
				/>
			</Grid>
			<Grid item style={{ color: 'grey', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
				<h2 style={{ color: 'white' }}>Contacts:</h2>
				{contactsName.map((item) => {
					return (
						<TextField
							key={item}
							style={{ marginTop: 4 }}
							value={values.contacts[item] || ''}
							name={'contacts.' + item}
							id={item}
							type='text'
							size='small'
							label={item}
							onChange={handleChange}
						/>
					);
				})}
			</Grid>
			<Grid container direction='row' style={{ marginBottom: 0 }} justify='center'>
				<Grid container justify='center'>
					<IconButton type='submit' style={{ margin: '0 10px' }}>
						<AddRoundedIcon color='primary' />
					</IconButton>
					<IconButton onClick={editHandler} type='submit' style={{ margin: '0 10px' }}>
						<CloseRoundedIcon color='secondary' />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
};
