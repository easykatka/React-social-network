import { makeStyles } from '@material-ui/core';
export const privateMessages = makeStyles((theme) => ({
	privateMessages__container: {
		backgroundColor: '#36393f',
		padding: 15,
		position: 'relative',

	},
	privateMessages__messagesList: {
		overflowY: 'auto',
		height: 500,
		padding: 8
	},
	privateMessages__messageBody: {
		color: '#dcddde',
		wordBreak: 'break-word',
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
		marginRight: 10

	},
	privateMessages__messageContent: {
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
	privateMessages__deleteIcon: {
		cursor: 'pointer',
		opacity: 0,
		fontSize: 15,
		marginLeft: 5

	},
	privateMessages__messageTitle: {
		display: 'flex',
		alignItems: 'center',
		"&:hover": {
			"&>*": { opacity: 1 }
		}

	},
	privateMessages__avatar: {
		marginRight: 15
	}
}));