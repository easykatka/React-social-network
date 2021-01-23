import { makeStyles } from '@material-ui/core';
export const privateMessages = makeStyles((theme) => ({
	privateMessages__container: {
		backgroundColor: '#36393f',
		padding: 15,
		height: 600,
		position: 'relative',
	},
	privateMessages__messagesList: {
		overflowY: 'auto',
		height: 500,
		padding: 8,
	},
	privateMessages__messageBody: {
		color: '#dcddde',
		wordBreak: 'break-all',
	},
	privateMessages__doneIcon: {
		color: 'orange',
		fontSize: 12,
	},
	privateMessages__doneAllIcon: {
		color: 'green',
		fontSize: 12,
	},
	privateMessages__addedAt: {
		fontSize: 10,
		color: 'grey',
	},
	privateMessages__senderName: {
		color: '#fff',
		fontWeight: 700,
	},
	privateMessages__messageContent: {
		display: 'flex',
		padding: '14px 0',
		borderTop: '1px solid #40444b',
		"&:hover": {
			opacity: 0
		}
	},

	privateMessages__deleteIcon: {
		opacity: 0
	},
}));