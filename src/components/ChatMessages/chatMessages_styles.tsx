import { makeStyles } from "@material-ui/core";


export const chatMessages = makeStyles(() => ({
	root: {
		backgroundColor: '#36393f',
		padding: 15,

	},
	senderName: {
		color: 'white',
		fontWeight: 700,
	},
	messageBody: {
		color: '#dcddde',
		wordBreak: "break-word",
	},
	messagesWrapper: {
		overflowY: 'auto',
		height: 500,
		padding: 8
	},
	message: {
		padding: '14px 0',
		borderTop: '1px solid #40444b',
		display: 'flex',
		flexDirection: 'row',
	},
}))