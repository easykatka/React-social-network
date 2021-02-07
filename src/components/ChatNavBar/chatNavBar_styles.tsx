import { makeStyles, Badge, withStyles } from '@material-ui/core';
export const messengerNavBar = makeStyles(() => ({
	root: {
		padding: '15px',
		background: '#2f3136',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '0px 0px 0px 15px',
		height: 600,
	},
	
	pmWrapper: {
		overflowY: 'auto',
		padding: '0 5px'
	},
	chip: {
		width: 160,
		justifyContent: 'left',
		margin: '5px 0',
		background: '#40444b',
	},
}));

export const NavBadge = withStyles(() => ({
	badge: {
		position: 'absolute',
		top: 21,
		right: 15,
	},
}))(Badge);
