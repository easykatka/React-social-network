import { makeStyles } from '@material-ui/core';
export const profileStyles = makeStyles((theme) => ({
	profileStyles__container: {
		backgroundColor: '#36393f',
		borderRadius: '0 0 15px 15px',
		position: 'relative',
		width: '100%',
		height: 600,
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		
	},
	profileStyles__rightblock: {
		height: 600
	}
}));