import { Grid, Button, TextField, Typography, Checkbox, FormControlLabel } from '@material-ui/core'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putNewProfile, setFormEdit } from '../../../app/reducers/profile-reducer'

//TODO починить конект формы , сделать валидацию для контактов 
export const ProfileEditForm = () => {
	const profile = useSelector(state => state.profile.profile)
	const dispatch = useDispatch()
	const formError = useSelector(state => state.profile.formError)

	const { handleSubmit, handleChange, values, setSubmitting, resetForm } = useFormik({
		initialValues: profile,
		onSubmit: profile => {
			dispatch(putNewProfile(profile))
		},
	})
	// убрать форму если перешли на другую страницу
	useEffect(() => () =>
		dispatch(setFormEdit(false))
		, [])
	return (
		<form onSubmit={handleSubmit} style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
			<Typography variant='h4'>Edit info</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} >
					<TextField
						label='Name'
						type='text'
						required
						value={values?.fullName}
						onChange={handleChange}
						placeholder={'Enter your name'}
						id='fullName'
					/>
				</Grid>
				<Grid item xs={12} md={6} >
					<FormControlLabel
						labelPlacement='start'
						control={
							<Checkbox
								checked={values?.lookingForAJob}
								onChange={handleChange}
								color='primary'
								id='lookingForAJob'
							/>
						}
						label='Are you looking for a job?'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField label='About' required type='text' value={values?.aboutMe} multiline onChange={handleChange} id='aboutMe' />
				</Grid>
				<Grid item xs={12} md={6} style={{ marginBottom: '80px' }}>
					<TextField
						label='Skills'
						type='text'
						multiline
						required
						value={values?.lookingForAJobDescription}
						onChange={handleChange}
						id='lookingForAJobDescription'
					/>
				</Grid>
			</Grid>
			<Typography variant='h5'> Contacts </Typography>
			{ !formError || <Typography style={{ color: 'red' }}> invalid url format for {formError} </Typography>}
			<Grid container spacing={3}>
				{profile
					? Object.keys(profile.contacts).map(key => {
						return (

							<Grid key={key} item xs={12} md={6}>
								{ !formError === key ? <Typography style={{ color: 'red' }}> invalid url format for {formError} </Typography> : null}
								<TextField
									value={values.contacts[key] || ''}
									name={'contacts.' + key}
									id={key}
									type='text'
									label={key}
									onChange={handleChange}
								/>
							</Grid>
						)
					})
					: null}
			</Grid>
			<Grid container justify='space-around' style={{ marginTop: '20px' }}>
				<Button variant='contained' type='submit' color='primary'>
					Save
				</Button>
				<Button variant='contained' type='submit' color='secondary' onClick={() => { dispatch(setFormEdit(false)) }}	>
					Cancel
				</Button>
			</Grid>
		</form>
	)
}
	