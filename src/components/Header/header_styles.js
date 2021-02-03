import { makeStyles } from '@material-ui/core/styles';


export const header = makeStyles((theme) => ({
	header__container: {
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		padding:'5px 30px',
		
		width:1240
	},
	header__profile: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	
	},
	header: {
		background: 'linear-gradient(to top, #232526, #414345)',
		borderRadius:'15px 15px 0 0',
		
		
	
	},
}));