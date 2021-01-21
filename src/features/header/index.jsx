import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Badge, Grid } from '@material-ui/core';
import { logout } from '../../app/reducers/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from '../../app/reducers/profile-reducer';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { getNewMessagesCount } from '../../app/reducers/dialogs-reducer';

const useStyles = makeStyles((theme) => ({
	header__container: {
		color: 'white',
		width: 1200,
		margin: '15px auto',
		display: 'flex',
		alignItems: 'center',
	},
	header__profile: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	header: {
		background: 'linear-gradient(to top, #232526, #414345)',
	},
}));

export const Header = () => {
	const classes = useStyles();
	const AuthUser = useSelector((state) => state.profile.AuthUser);
	const { isAuth, id } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { newMessagesCount } = useSelector((state) => state.dialogs);

	React.useEffect(() => {
		if (id) {
			dispatch(getAuthUser(id));
			dispatch(getNewMessagesCount());
		}
	}, [dispatch, id]);

	const navTitles = ['profile', 'users', 'messenger'];

	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<AppBar position='sticky' className={classes.header}>
			<Grid className={classes.header__container}>
				<Grid container spacing={6}>
					{navTitles.map((item) => {
						return (
							<Grid item key={item}>
								<NavLink to={'/' + item} activeClassName='header'>
									<h2> {item.toLocaleUpperCase()}</h2>
								</NavLink>
							</Grid>
						);
					})}
				</Grid>
				{isAuth && (
					<Grid container spacing={3} className={classes.header__profile}>
						<Grid item>
							<a href='https://social-network.samuraijs.com/docs'>
								<h2>API</h2>
							</a>
						</Grid>
						<Grid item>
							<a href='https://docs.google.com/document/d/1ZSXmTzkgq_Kj1VbWuq8fTv_DPD95GFDvPZgqFeIYGoM/edit#'>
								<h2>API TO DO</h2>
							</a>
						</Grid>
						<Grid item>
							<a href={`/profile`}>
								<h4>{AuthUser?.fullName}</h4>
							</a>
						</Grid>
						<Grid item>
							{newMessagesCount ? (
								<Link to={`/messenger`}>
									<Badge badgeContent={newMessagesCount} color='secondary'>
										<Avatar alt='Remy Sharp' src={AuthUser?.photos.small} />
									</Badge>
								</Link>
							) : (
								<Avatar alt='Remy Sharp' src={AuthUser?.photos.small} />
							)}
						</Grid>
						<Grid item>
							<a>
								<LaunchOutlinedIcon onClick={() => dispatch(logout())} fontSize='large' />
							</a>
						</Grid>
					</Grid>
				)}
			</Grid>
		</AppBar>
	);
};
