import { Avatar, Box, IconButton, Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SendRoundedIcon from '@material-ui/icons/SendRounded'



// offsetHeight, scrollTop, scrollHeight.
export const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const [wsChannel, setWsChannel] = useState(null)
	const [readyStatus,setReadyStatus] = useState('pending')

	// подписка на канал 
	useEffect(() => {
		let ws
		const closeHandler = () => {
		console.log('close WS')
		 setTimeout(createChannel, 3000) }

		const createChannel = () => {
			ws?.removeEventListener('close', closeHandler)
			ws?.close()
			ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
			ws.addEventListener('close', closeHandler)
			setWsChannel(ws)
		}
		createChannel()
		return () => {
			ws.removeEventListener('close', closeHandler)
			ws.close()
			console.log('убираем слушатель закрытия канала')
		}
	}, [])

	useEffect(() => {
		let openHandler =() => {setReadyStatus('ready')}
		wsChannel?.addEventListener('open' ,openHandler )
		console.log('канал готов')

		return () => {
			wsChannel?.removeEventListener('open' ,openHandler )
			console.log('убираем слушатель готовности канала')
		}
	}, [wsChannel])

		// загружаем сообщения
	useEffect(() => {
		let messageHandler = (e) => { 
			setMessages((prev) => [...prev, ...JSON.parse(e.data)])
		}
		wsChannel?.addEventListener("message", messageHandler)
		return () => {
			wsChannel?.removeEventListener('message',messageHandler)
		}}, [wsChannel])

	let messageList
	const scrollBottom = () => {
		const scrollHeight = messageList.scrollHeight;
		const height = messageList.clientHeight;
		const maxScrollTop = scrollHeight - height;
		messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}
//!! !message
	const SendMessage = (e) => {
		e.preventDefault()
		if (message) {
			wsChannel?.send(message)
			setMessage('')
			console.log('сообщение отправлено')
		}
	}
	// скролл вниз при новом сообщении

	useEffect(() => {
		scrollBottom()
	}, [messages, scrollBottom])


	return (
		<Paper style={{ width: 600 }}>

			<Grid item xs={12} style={{ width: '100%', overflow: "hidden", height: '100%' }}>
				<Grid style={{ overflowY: "scroll", height: "65vh", width: '100%' }}
					ref={(div) => { messageList = div; }}>
					{messages.map((i, idx) => (
						<Box p={1} key={idx}>
							<Grid container direction='row' >
								<Link to={'/profile/' + i.userId}>
									<Avatar alt='avatar' src={i.photo} />
								</Link>
								<div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
									<strong> {i.userName}</strong>
									{i.message}</div>
							</Grid>
						</Box>
					))}
				</Grid>
				<Box direction='row' p={3}>
					<form onSubmit={SendMessage}>
						<TextField type="text" style={{ width: 500 }} autoFocus={true} variant='outlined' placeholder='white a message' size='small'
							name="message" onChange={(e) => setMessage(e.currentTarget.value)}
							value={message} id="message__input" />
						<IconButton type="submit" disabled={wsChannel === null || readyStatus !== "ready"}>
							<SendRoundedIcon color='primary' />
						</IconButton>
					</form>
				</Box>
			</Grid >
		</Paper>
	)
};
