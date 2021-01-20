import { Badge, makeStyles, withStyles } from "@material-ui/core";


export const chatUsersList = makeStyles((theme) => ({
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

export const StyledBadge = withStyles((theme) => ({
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