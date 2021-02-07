import { makeStyles } from '@material-ui/core';
export const privateMessages = makeStyles(() => ({
	root: {
		backgroundColor: '#36393f',
		padding: 15,

	},
	messagesWrapper: {
		overflowY: 'auto',
		height: 500,
		padding: 8
	},
	messageBody: {
		color: '#dcddde',
		wordBreak: 'break-word',
	},
	doneIcon: {
		color: 'orange',
		fontSize: 12,
	},
	doneAllIcon: {
		color: 'green',
		fontSize: 12,

	},
	addedAt: {
		fontSize: 10,
		color: 'grey',
	},
	senderName: {
		color: '#fff',
		fontWeight: 700,
		marginRight: 10

	},
	messageContent: {
		display: 'flex',
		padding: '9px 0',
		borderTop: '1px solid #40444b',
		alignItems: 'center',
		"&:hover": {
			"&>*": {
				"&>*": {
					"&>*": { opacity: 1 }
				}
			}
		}
	},
	deleteIcon: {
		cursor: 'pointer',
		opacity: 0,
		fontSize: 15,
		marginLeft: 5

	},
	messageTitle: {
		display: 'flex',
		alignItems: 'center',
		"&:hover": {
			"&>*": { opacity: 1 }
		}

	},
	avatar: {
		marginRight: 15
	}
}));