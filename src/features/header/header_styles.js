import { makeStyles } from '@material-ui/core/styles';


export const header = makeStyles((theme) => ({
	header__container: {
		color: 'white',
		width: 1200,
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',

		marginBottom:10,
		padding:'15px 30px'
	},
	header__profile: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	
	},
	header: {
		background: 'linear-gradient(to top, #232526, #414345)',
		
		
	
	},
}));