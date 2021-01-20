import { makeStyles } from '@material-ui/core';
export const privateMessages = makeStyles((theme) => ({
	privateChat__container: {
		backgroundColor: '#36393f',
		padding: 15,
		height: 600,
		position: 'relative',
	},
	privateChat__messageBody: {
		color: '#dcddde',
		wordBreak: 'break-all',
	},
	privateChat__doneIcon: {
		color: 'orange',
		fontSize: 12,
	},
	privateChat__doneAllIcon: {
		color: 'green',
		fontSize: 12,
	},
	privateChat__addedAt: {
		fontSize: 10,
		color: 'grey',
	},
	privateChat__senderName: {
		color: '#fff',
		fontWeight: 700,
	},
	privateChat__messageContent: {
		display: 'flex',
		padding: '14px 0',
		borderTop: '1px solid #40444b',
	},
	privateChat__messageContainer: {
		overflowY: 'auto',
		height: 500,
		padding: 8,
	},
}));