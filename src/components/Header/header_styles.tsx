import { makeStyles } from '@material-ui/core/styles';
export const header = makeStyles(() => ({
	wrapper: {
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		padding: '5px 30px',
		
	},
	authUserWrapper: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	root: {
		background: 'linear-gradient(to top, #232526, #414345)',
		borderRadius: '15px 15px 0 0',
	},
}));