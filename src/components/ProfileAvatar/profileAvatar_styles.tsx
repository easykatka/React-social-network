import { Badge, makeStyles, withStyles } from '@material-ui/core';
export const profileAvatar = makeStyles((theme) => ({
	avatar: {
		width: 150,
		height: 150,
	},
	uploadButton: {
		"&:hover": {
			color: theme.palette.secondary.main
		}
	},
	root: {
		position: 'relative',
		height: 150,
	},

}));
export const StyledBadge = withStyles(() => ({
	badge: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 140,
		right: 5,
	},
}))(Badge);
