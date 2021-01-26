import { Grid, TextField, Checkbox, FormControlLabel, IconButton } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { putNewProfile } from '../../../../app/reducers/profile-reducer';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { profileEditForm } from './profileEditForm_style';
import * as Yup from 'yup';
import { Dispatch } from 'react';
import { RootState } from '../../../../app/store';

type PropsType = {
	setEditForm: Dispatch<boolean>
}
export const ProfileEditForm: React.FC<PropsType> = ({ setEditForm }) => {
	const { profile } = useSelector((state: RootState) => state.profile);
	const dispatch = useDispatch();
	const classes = profileEditForm();
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
		initialValues: profile,
		onSubmit: (e) => {
			debugger
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

	const contactsName = ['vk', 'facebook', 'github'];
	return (
		<Grid component='form' onSubmit={handleSubmit} className={classes.profileEditForm__container}>
			<Grid container direction='row' justify='center' alignItems='center'>
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
						<TextField
							onBlur={handleBlur}
							rowsMax={2}
							required
							type='text'
							value={values?.aboutMe}
							multiline
							onChange={handleChange}
							id='aboutMe'
						/>
						{errors.aboutMe && touched.aboutMe && <div className={classes.profileEditForm__error}>{errors.aboutMe}</div>}
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
							onBlur={handleBlur}
						/>

						{errors.lookingForAJobDescription && touched.lookingForAJobDescription && (
							<div className={classes.profileEditForm__error}>{errors.lookingForAJobDescription}</div>
						)}
					</div>
				</div>
				<div className={classes.profileEditForm__rightBlock}>
					<h2>Contacts:</h2>
					{contactsName.map((item) => {
						return (
							<TextField
								key={item}
								className={classes.profileEditForm__contacts}
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
					className={classes.profileEditForm__job}
					labelPlacement='start'
					control={
						<Checkbox size='small' checked={values?.lookingForAJob} onChange={handleChange} color='primary' id='lookingForAJob' />
					}
					label='Are you looking for a job?'
				/>
			</div>
			<div className={classes.profileEditForm__buttons}>
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
