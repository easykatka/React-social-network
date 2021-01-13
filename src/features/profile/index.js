import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, putNewAvatar, setFormEdit } from '../../app/reducers/profile-reducer'
import { useEffect } from 'react'
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { ProfileEditForm } from './profileEditForm'
import { ProfileInfo } from './profileInfo'
import { FollowUnfollow } from '../components/follow-unfollow'

const useStyles = makeStyles(theme => ({
	avatar__block: {
		padding: theme.spacing(2),
		borderRadius: theme.spacing(1),

		'&>*': { width: '100%' },
	},
	userInfo__block: {
		padding: theme.spacing(2),
	},
	useInfo__status: {
		width: '100%',
		justifyContent: 'left',
		textTransform: 'none',
	},
	avatar_img: {
		borderRadius: theme.spacing(1),
		width: '100%',
		height: theme.spacing(30),
		marginBottom: theme.spacing(1),
	},
}))
const Profile = props => {
	const classes = useStyles()
	const profile = useSelector(state => state.profile.profile)
	const AuthUserId = useSelector(state => state.auth.id)
	const formEdit = useSelector(state => state.profile.formEdit)
	const routerId = props.match.params.userId
	const profileUserId = routerId || AuthUserId
	const dispatch = useDispatch()

	useEffect(() => {
		if (profileUserId) {
			dispatch(getUserProfile(profileUserId))
		}
	}, [dispatch, profileUserId])
	if (!profile) { return <div>FETCHING</div> }


	return (<>
		<Typography style={{ textAlign: 'center', marginBottom: '10px' }} variant='h4'>Profile </Typography>
		<Grid container spacing={2}>
			{/* левый блок */}
			<Grid item xs={3}>
				<Paper className={classes.avatar__block} elevation={0}>
					<Avatar className={classes.avatar_img} alt='user foto' src={profile?.photos.large} />
					{!routerId ? (
						<div>
							<input
								accept='image/*'
								className={classes.input}
								id='contained-button-file'
								multiple
								type='file'
								style={{ display: 'none' }}
								onChange={e => dispatch(putNewAvatar(e.target.files[0]))}
							/>
							<label htmlFor='contained-button-file'>
								<Button fullWidth variant='contained' color='primary' component='span'>
									Upload new photo
								</Button>
							</label>
							{formEdit || <Button style={{ marginTop: "12px" }} color='secondary' variant='contained' fullWidth onClick={() => dispatch(setFormEdit(true))}>Edit</Button>}
						</div>
					) : (
						<FollowUnfollow id={routerId} followed={profile.followed} />
						)}
				</Paper>
			</Grid>
			{/* правый блок */}
			<Grid item xs>
				<Paper className={classes.userInfo__block}>
					{formEdit ? <ProfileEditForm /> : <ProfileInfo routerId={routerId} />}
				</Paper>
			</Grid>
		</Grid>
	</>
	)
}
export default withRouter(Profile)
