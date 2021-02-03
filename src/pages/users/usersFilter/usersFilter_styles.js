import { makeStyles } from '@material-ui/core/styles';

export const usersFilter = makeStyles((theme) => ({
	usersFilter__container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 10,
	},
	usersFilter__pagination:{
		":	hover":{
			background:'red'
		}
	}
}))
