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
	}

}));
export const StyledBadge = withStyles(() => ({
	badge: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 140,
		right: 5,
	},
}))(Badge);
