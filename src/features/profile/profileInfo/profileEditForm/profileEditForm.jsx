import { Grid, TextField, Checkbox, FormControlLabel, IconButton } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { putNewProfile } from '../../../../app/reducers/profile-reducer';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { profileEditForm } from './profileEditForm_style';
import * as Yup from 'yup';

//TODO починить конект формы , сделать валидацию для контактов
export const ProfileEditForm = ({ setEditForm }) => {
	const { profile } = useSelector((state) => state.profile);
	const dispatch = useDispatch();
	const classes = profileEditForm();
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
		initialValues: profile,
		onSubmit: (e) => {
			dispatch(putNewProfile(e));
			setEditForm(false);
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(4, 'Name must be longer than 4 characters.')
				.max(30, 'Name must be shorter than 30 characters.')
				.required('Required'),
		}),
	});

	const contactsName = ['vk', 'facebook', 'github'];
	console.log(errors.fullName, touched.fullName);

	return (
		<Grid container component='form' onSubmit={handleSubmit} className={classes.profileEditForm__container}>
			<div className={classes.profileEditForm__leftBlock}>
				<div>
					<h2> Name: </h2>
					<TextField
						value={values?.fullName}
						onChange={handleChange}
						placeholder={'Enter your name'}
						id='fullName'
						onBlur={handleBlur}
					/>
					{errors.fullName && touched.fullName && <div className={classes.profileEditForm__error}>{errors.fullName}</div>}
				</div>

				<div>
					<h2> About: </h2>
					<TextField rowsMax={2} required type='text' value={values?.aboutMe} multiline onChange={handleChange} id='aboutMe' />
				</div>
				<div>
					<h2> Skills: </h2>
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
				</div>
			</div>
			<div className={classes.profileEditForm__rightBlock}>
				<FormControlLabel
					className={classes.pprofileEditForm__job}
					labelPlacement='start'
					control={
						<Checkbox size='small' checked={values?.lookingForAJob} onChange={handleChange} color='primary' id='lookingForAJob' />
					}
					label='Are you looking for a job?'
				/>
				<h2>Contacts:</h2>
				{contactsName.map((item) => {
					return (
						<TextField
							key={item}
							className={classes.profileEditForm__contacts}
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
			</div>

			<Grid container direction='row' justify='center'>
				<IconButton type='submit'>
					<AddRoundedIcon color='primary' />
				</IconButton>
				<IconButton onClick={() => setEditForm(false)} type='submit'>
					<CloseRoundedIcon color='secondary' />
				</IconButton>
			</Grid>
		</Grid>
	);
};
