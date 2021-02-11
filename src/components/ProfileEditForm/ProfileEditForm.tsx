import { Grid, TextField, Checkbox, FormControlLabel, IconButton } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { putNewProfile } from '../../app/reducers/profile-reducer';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { profileEditForm } from './profileEditForm_style';
import * as Yup from 'yup';
import { Dispatch } from 'react';
import { RootState } from '../../app/store';
import { CustomTextFieldWithErrors } from '../CustomTextFieldWithErrors/CustomTextFieldWithErrors';


interface IProps {
	setEditForm: Dispatch<boolean>
}
export const ProfileEditForm: React.FC<IProps> = ({ setEditForm }) => {
	const { profile } = useSelector((state: RootState) => state.profile);
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
			aboutMe: Yup.string().max(100, 'Description must be shorter than 100 characters.').required('Required'),
			lookingForAJobDescription: Yup.string().max(100, 'Description must be shorter than 100 characters.').required('Required'),
		}),
	});

	const contactsNames = ['vk', 'facebook', 'github'];
	const inputs = [
		{ label: 'Name', id: 'fullName' },
		{ label: 'About me', id: 'aboutMe' },
		{ label: 'Skills', id: 'lookingForAJobDescription' }
	]

	return (
		<Grid component='form' onSubmit={handleSubmit} className={classes.root}>
			<Grid container direction='row' justify='space-around' alignItems='center'>
				<div className={classes.leftBlock}>
					{inputs.map(({ id, label }) => {
						return (
							// @ts-ignore
							<CustomTextFieldWithErrors label={label} id={id} errors={'errors.' + id} touched={touched[id]}
								onBlur={handleBlur} onChange={handleChange} value={'values.' + id} />
						)
					})}
				</div>
				<div className={classes.rightBlock}>
					<h2>Contacts:</h2>
					{contactsNames.map((item) => {
						return (
							<TextField
								key={item}
								value={values?.contacts[item] || ''}
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
			</Grid>
			<div>
				<FormControlLabel
					className={classes.job}
					labelPlacement='start'
					control={
						<Checkbox size='small' checked={values?.lookingForAJob} onChange={handleChange} color='primary' id='lookingForAJob' />
					}
					label='Are you looking for a job?'
				/>
			</div>
			<div className={classes.buttons}>
				<Grid container justify='center'>
					<IconButton type='submit'>
						<AddRoundedIcon color='primary' />
					</IconButton>
					<IconButton onClick={() => setEditForm(false)} type='submit'>
						<CloseRoundedIcon color='secondary' />
					</IconButton>
				</Grid>
			</div>
		</Grid>
	);
};
