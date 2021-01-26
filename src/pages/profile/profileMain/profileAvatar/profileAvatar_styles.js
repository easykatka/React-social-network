import { Badge, makeStyles, withStyles } from '@material-ui/core';
export const profileAvatar = makeStyles((theme) => ({
	profileAvatar__avatar: {
		width: 150,
		height: 150,
	},
	profileAvatar__uploadBtn: {
		"&:hover": {
			color: 'orange'
		}
	}
	
}));
export const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 140,
		right: 5,
	},
}))(Badge);
