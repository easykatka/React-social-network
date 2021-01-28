import { makeStyles, Badge, withStyles } from '@material-ui/core';
export const messengerNavBar = makeStyles((theme) => ({
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
		'&:hover': {},
	},
	chatNavBar__pmContainer: {
		overflowY: 'auto',
		padding: '0 5px'
	},
	chatNavBar__chip: {
		width: 160,
		justifyContent: 'left',
		margin: '5px 0',
		background: '#40444b',
	},
}));

export const NavBadge = withStyles((theme) => ({
	badge: {
		position: 'absolute',
		top: 21,
		right: 15,
	},
}))(Badge);
