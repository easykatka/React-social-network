import { Grid, Button, TextField, Typography, Checkbox, FormControlLabel } from '@material-ui/core'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { putNewProfile } from '../../../app/reducers/profile-reducer'

export const ProfileEditForm = ({ setEditMode }) => {
	const profile = useSelector(state => state.profile.profile)
	const dispatch = useDispatch()

	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: profile,
		onSubmit: profile => {
			dispatch(putNewProfile(profile))
		},
	})
	return (
		<form onSubmit={handleSubmit} style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
			<Typography variant='h4'>Profile info</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<TextField
						label='Name'
						type='text'
						value={values?.fullName}
						onChange={handleChange}
						placeholder={'Enter your name'}
						id='name'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
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
					<TextField label='About' type='text' value={values?.aboutMe} onChange={handleChange} id='aboutMe' />
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label='Skills'
						type='text'
						value={values?.lookingForAJobDescription}
						onChange={handleChange}
						id='lookingForAJobDescription'
					/>
				</Grid>
			</Grid>

			<Typography variant='h5'> Contacts </Typography>
			<Grid container spacing={3}>
				{profile
					? Object.keys(profile.contacts).map(key => {
							return (
								<Grid key={key} item xs={12} md={6}>
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
				<Button variant='contained' type='submit' color='secondary' onClick={() => setEditMode(false)}>
					Cancel
				</Button>
			</Grid>
		</form>
	)
}
