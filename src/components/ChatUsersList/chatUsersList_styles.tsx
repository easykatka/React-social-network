import { Badge, makeStyles, withStyles } from "@material-ui/core";


export const chatUsersList = makeStyles((theme) => ({
	root: {
		width:250,
		padding:'20px 0px',
		background: '#2f3136',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '0 0 15px 0',
		height: 600,
	},
	user: {
		color: '#8e9297',
		fontSize:14,
		padding: '10px 20px',
		'&:hover': {
			background: 'rgba(79,84,92,0.32)',
			color:  theme.palette.primary.main,
			borderRadius: 7,
			
		},
	},
	avatar: {
		width: 30,
		height: 30,
	},
	usersWrapper: {
		overflowY: 'auto',
		margin: '16px 0px'
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