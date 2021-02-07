import { makeStyles } from '@material-ui/core';
export const profileStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#36393f',
		borderRadius: '0 0 15px 15px',
		position: 'relative',
		width: '100%',
		minHeight: 600,
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		

	},
	rightBlockWrapper: {
		minHeight: 600
	}
}));