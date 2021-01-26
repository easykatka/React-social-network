import { makeStyles } from '@material-ui/core';
export const profileMain = makeStyles((theme) => ({
	profileMain__container: {
		background: '#2f3136',
		color: 'white',
		borderRadius: '15px 0px 0px 15px',
		height: 600,
		alignItems: 'center',
		padding: 15
	},

	profileMain__name: {
		fontWeight: 700,
		fontSize: 20,
		textAlign: 'center',
		wordBreak: 'break-all',
	},
	profileMain__footer: {
		borderTop: '1px solid grey',
		paddingTop: 5,
		width: '100%'
	},
	profileMain__profileFriendBtn: {
		margin: 20,
		width: 200

	},
	profileMain__profilePmBtn: {
		margin: 20,
		color: 'black',
		backgroundColor: 'orange',
		width: 200
	}

}))
