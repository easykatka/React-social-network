import { makeStyles } from '@material-ui/core';
export const profileStatus = makeStyles((theme) => ({
	profileAvatar__status: {
		textAlign: 'center',
		cursor: 'pointer',
		fontSize: 16,
		"&:hover": { color: "orange" },
		color: '#61fbfb',
		wordBreak: 'break-word',
		padding: 5
	},
		profileAvatar__editIcon: {
			marginLeft: 10,
			fontSize: 18
		},
}))
