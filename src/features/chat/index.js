import { Avatar, Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


// offsetHeight, scrollTop, scrollHeight.
export const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const ws = new WebSocket(
		"wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");

	useEffect(() => {
		ws.addEventListener("message", (e) => {
			const newMessages = JSON.parse(e.data);
			setMessages((prev) => [...prev, ...newMessages])
		})
		scrollBottom()
	}
		, [])

	useEffect(() => {
		scrollBottom()
	}, [messages])

	let messageList
	const scrollBottom = () => {
		const scrollHeight = messageList.scrollHeight;
		const height = messageList.clientHeight;
		const maxScrollTop = scrollHeight - height;
		messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}

	const SendMessage = () => {
		if (message) {
			ws.send(message)
			setMessage('')
		}
	}

	return (
		<Paper>
			<Grid
				style={{ width: '100%', overflow: "hidden", height: '100%' }}>
				<Grid style={{ overflowY: "scroll", height: "70vh", width: '105%' }}
					ref={(div) => { messageList = div; }}>
					{messages.map((i) => (
						<Box  p={1}>
							<Grid container direction='row' >
								
							<NavLink to={'/profile/' + i.userId}>
								<Avatar alt='avatar' src={i.photo} />
							</NavLink>

								<div style={{display:'flex' ,flexDirection:'column' ,marginLeft:10}}>
								<strong> {i.userName}</strong>
								{i.message}</div> 
								</Grid>
						</Box>
				))}
			</Grid>
			<TextField variant='outlined' size='small'
				name="message" onChange={(e) => setMessage(e.currentTarget.value)}
				value={message} id="message__input" />
			<Button onClick={SendMessage}>Send</Button>
		</Grid >
		</Paper>
	)


};
