import { Avatar, Badge, Grid, makeStyles, Typography, withStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Preloader } from '../../../common/preloader';
const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: '#44b700',
		boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
		},
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	chatList__container: {
		padding: '15px 0px',
		background: '#2f3136',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '0 15px 15px 0px',
		height: 600,
	},
	chatList__item: {
		color: '#8e9297',
		margin: 5,
		width: 250,
		padding: '10px 20px',

		'&:hover': {
			background: 'rgba(79,84,92,0.32)',
			color: 'white',
			borderRadius: 7,
			padding: '10px 20px',
		},
	},
	chatList__avatar: {
		width: 30,
		height: 30,
	},
	chatList__usersContainer: {
		overflowY: 'auto',
	},
}));

export const ChatList = ({ users }) => {
	const classes = useStyles();

	return (
		<Grid item xs={3} className={classes.chatList__container}>
			<h4>Users — {users?.length}</h4>
			<div className={classes.chatList__usersContainer}>
				{users?.map((i, idx) => {
					return (
						<Link to={`/messenger/${i.userId || i.id}`} key={idx}>
							<Grid container alignItems='center' className={classes.chatList__item}>
								<Grid item>
									<StyledBadge
										overlap='circle'
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'right',
										}}
										variant='dot'>
										<Avatar alt='Remy Sharp' src={i?.photo} className={classes.chatList__avatar} />
									</StyledBadge>
								</Grid>
								<p style={{ marginLeft: 12 }} variant='h6'>
									{' '}
									{i.userName}
								</p>
							</Grid>
						</Link>
					);
				})}
			</div>
		</Grid>
	);
};
