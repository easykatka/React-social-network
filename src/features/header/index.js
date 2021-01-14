import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Avatar, Grid } from '@material-ui/core';
import { logout } from '../../app/reducers/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from '../../app/reducers/profile-reducer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	app__container: {
		width: 1200,
		margin: '10px auto',
		display: 'flex',
	},

	profile_block: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	app: {
		backgroundColor: '#20232a',
	},
}));

export const Header = () => {
	const AuthUser = useSelector((state) => state.profile.AuthUser);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const AuthUserId = useSelector((state) => state.auth.id);

	const dispatch = useDispatch();
	useEffect(() => {
		if (AuthUserId) {
			dispatch(getAuthUser(AuthUserId));
		}
	}, [dispatch, AuthUserId]);

	const navTitles = ['home', 'profile', 'chat', 'users'];

	const classes = useStyles();
	return (
		<AppBar position='sticky' className={classes.app}>
			<Grid className={classes.app__container}>
				<Grid container spacing={6}>
					{navTitles.map((item) => {
						return (
							<Grid item key={item}>
								<NavLink style={{ color: 'white' }} to={'/' + item} activeClassName='active'>
									<h2> {item.toLocaleUpperCase()}</h2>
								</NavLink>
							</Grid>
						);
					})}
				</Grid>
				<Button className={classes.title} href='https://social-network.samuraijs.com/docs' color='inherit'>
					API
				</Button>
				{isAuth && (
					<Grid container spacing={3} className={classes.profile_block}>
						<h4>{AuthUser?.fullName}</h4>
						<Grid item>
							<Avatar alt='Remy Sharp' src={AuthUser?.photos.small} />
						</Grid>
						<IconButton color='inherit' onClick={() => dispatch(logout())}>
							<ExitToAppIcon />
						</IconButton>
					</Grid>
				)}
			</Grid>
		</AppBar>
	);
};
