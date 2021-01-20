import { Avatar, Badge, Grid, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getDialogs } from '../../../app/reducers/dialogs-reducer';
import devs from '../../../assets/img/devs.jpg';

const useStyles = makeStyles((theme) => ({
	chatNavBar__container: {
		padding: '15px',
		background: '#2f3136',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '15px 0px 0px 15px',
		height: 600,
	},
	chatNavBar__avatar: {
		margin: 11,
		paddingLeft: 5,
		'&:hover': {},
	},
	chatNavBar__pmContainer: {
		overflowY: 'auto',
		
	},
}));

export const ChatNavBar = () => {
	const { dialogs } = useSelector((state) => state.dialogs);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDialogs());
	}, []);
	const classes = useStyles();
	return (
		<div className={classes.chatNavBar__container}>
			<h4>Chat rooms: </h4>
			<NavLink to={'/messenger'} activeClassName='navchat'>
				<Avatar src={devs} className={classes.chatNavBar__avatar} />
			</NavLink>
			<h4>PM: </h4>
			<div className={classes.chatNavBar__pmContainer}>
				{dialogs.map((item, idx) => {
					return (
						<div className={classes.chatNavBar__avatar} key={idx}>
							<NavLink to={`/messenger/${item.id}`} key={item.id} activeClassName='navchat'>
								<Badge badgeContent={item.newMessagesCount} color='secondary'>
									<Avatar src={item?.photos?.small} />
								</Badge>
							</NavLink>
						</div>
					);
				})}
			</div>
		</div>
	);
};
