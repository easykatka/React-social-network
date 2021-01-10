import { Box, Grid, Button, Input, TextField, Typography, Checkbox, FormControlLabel } from '@material-ui/core'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'

export const ProfileEditForm = () => {
	const profile = useSelector(state => state.profile.profile)
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			name: '',
			lookingForAJob: false,
			skills: '',
			aboutMe: '',
			contacts: {
				vk: '',
			},
		},
		onSubmit: ({ name, lookingForAJob, aboutMe, skills, contacts }) => {
			console.log(name, lookingForAJob, aboutMe, skills, contacts)
		},
	})
	return (
		<form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
			<Box borderBottom={1}>
				<Typography variant='h4'>Profile info</Typography>
			</Box>
			<div>{/* {error && <div>{error}</div>} */}</div>
			<Grid container direction='column'>
				<Grid item>
					{' '}
					<TextField
						label='Name'
						type='text'
						value={values.name}
						onChange={handleChange}
						placeholder={'Enter your name'}
						id='name'
					/>
					<Grid item>
						<FormControlLabel
							labelPlacement='start'
							control={
								<Checkbox
									checked={values.lookingForAJob}
									onChange={handleChange}
									color='primary'
									id='lookingForAJob'
								/>
							}
							label='Are you looking for a job?'
						/>
					</Grid>
					<Grid item>
						<TextField
							label='About me'
							type='text'
							variant='outlined'
							multiline
							rows={4}
							value={values.aboutMe}
							onChange={handleChange}
							id='aboutMe'
						/>
					</Grid>
					<Grid item>
						<TextField
							label='Your skills'
							type='text'
							variant='outlined'
							multiline
							rows={4}
							value={values.skills}
							onChange={handleChange}
							id='skills'
						/>
					</Grid>
				</Grid>
			</Grid>
			
			<Button variant='contained' type='submit'>
				Save
			</Button>
		</form>
	)
}
