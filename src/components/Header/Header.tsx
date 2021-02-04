import {  Avatar, Badge, Grid, IconButton } from '@material-ui/core';
import { logout } from '../../app/reducers/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from '../../app/reducers/profile-reducer';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { getNewMessagesCount } from '../../app/reducers/dialogs-reducer';
import { RootState } from '../../app/store';
import { header } from './header_styles';

export const Header = () => {
	const classes = header();
	const authUser = useSelector((state: RootState) => state.profile.authUser);
	const { isAuth, id } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const { newMessagesCount } = useSelector((state: RootState) => state.dialogs);

	React.useEffect(() => {
		if (id) {
			dispatch(getAuthUser(id));
			dispatch(getNewMessagesCount());
		}
	}, [dispatch, id]);

	const navTitles = ['profile', 'users', 'messenger'];

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
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
					<Grid container spacing={3} className={classes.authUserWrapper}>
						<Grid item>
							<a href='https://docs.google.com/document/d/1ZSXmTzkgq_Kj1VbWuq8fTv_DPD95GFDvPZgqFeIYGoM/edit#'>
								<h2>API</h2>
							</a>
						</Grid>
						<Grid item>
							<Link to={`/profile`}>
								<h4>{authUser?.fullName}</h4>
							</Link>
						</Grid>
						<Grid item>
							{newMessagesCount ? (
								<Link to={`/messenger`}>
									<Badge badgeContent={newMessagesCount} color='secondary'>
										<Avatar alt='Remy Sharp' src={authUser?.photos?.small} />
									</Badge>
								</Link>
							) : (
									<Avatar alt='Remy Sharp' src={authUser?.photos?.small} />
								)}
						</Grid>
						<Grid item>
							<IconButton onClick={() => dispatch(logout())}>
								<LaunchOutlinedIcon color='secondary' />
							</IconButton>
						</Grid>
					</Grid>
				)}
			</div>
		</div>
	);
};
