import { makeStyles } from "@material-ui/core";


export const chatMessages = makeStyles((theme) => ({
	chatMessage__container: {
		backgroundColor: '#36393f',
		padding: 15,
		
	},
	chatMessage__senderName: {
		color: 'white',
		fontWeight: 700,
	},
	chatMessage__body: {
		color: '#dcddde',
		wordBreak: "break-word",
	},
	chatMessage__messagesContainer: {
		overflowY: 'auto',
		height: 500,
		padding: 8
	},
	chatMessage__messageContainer: {
		padding: '14px 0',
		borderTop: '1px solid #40444b',
		display: 'flex',
		flexDirection: 'row',
	},
}))