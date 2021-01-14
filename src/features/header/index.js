import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Avatar, Grid } from '@material-ui/core';
import { logout } from '../../app/reducers/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from '../../app/reducers/profile-reducer';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	header__container: {
		color: 'white',
		width: 1200,
		margin: '10px auto',
		display: 'flex',
		alignItems: 'center',
		
	},
	header__profile: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	header: {
		background: '-webkit-linear-gradient(to top, #232526, #414345)',
		background: 'linear-gradient(to top, #232526, #414345)',
	},
}));

export const Header = () => {
	const classes = useStyles();
	const AuthUser = useSelector((state) => state.profile.AuthUser);
	const { isAuth, id } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	// если залогинились,диспатчип юзера,получаем аватарку
	React.useEffect(() => {
		id && dispatch(getAuthUser(id));
	}, [dispatch, id]);
	// список навигационных кнопок
	const navTitles = ['home', 'profile', 'chat', 'users'];

	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<AppBar position='sticky' className={classes.header}>
			<Grid className={classes.header__container}>
				<Grid container spacing={6}>
					{navTitles.map((item) => {
						return (
							<Grid item key={item}>
								<NavLink to={'/' + item} activeClassName='active'>
									<h2> {item.toLocaleUpperCase()}</h2>
								</NavLink>
							</Grid>
						);
					})}
				</Grid>
				<a href='https://social-network.samuraijs.com/docs'>
					<h2>API</h2>
				</a>
				{isAuth && (
					<Grid container spacing={2} className={classes.header__profile}>
						<Link to={`/profile`}>
							<h4>{AuthUser?.fullName}</h4>{' '}
						</Link>
						<Grid item>
							<Avatar alt='Remy Sharp' src={AuthUser?.photos.small} />
						</Grid>
						<a>
							<LaunchOutlinedIcon  onClick={() => dispatch(logout())} fontSize='large'/>
						</a>
					</Grid>
				)}
			</Grid>
		</AppBar>
	);
};
