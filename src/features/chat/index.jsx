import { Grid, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatMessages } from './chatMessages';
import { ChatList } from './chatList';

// offsetHeight, scrollTop, scrollHeight.
export const Chat = () => {
	const [wsChannel, setWsChannel] = useState(null);
	const [messages, setMessages] = useState([]);
	// подписка на канал
	useEffect(() => {
		let ws;
		const closeHandler = () => {
			setTimeout(createChannel, 3000);
		};
		const createChannel = () => {
			ws?.removeEventListener('close', closeHandler);
			ws?.close();
			ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
			ws.addEventListener('close', closeHandler);
			setWsChannel(ws);
		};
		createChannel(); // реконект рекурсией
		return () => {
			ws.removeEventListener('close', closeHandler);
			ws.close();
			//убираем слушатель закрытия канала
		};
	}, []);
	// загружаем сообщения
	useEffect(() => {
		let messageHandler = (e) => {
			setMessages((prev) => [...prev, ...JSON.parse(e.data)]);
		};
		wsChannel?.addEventListener('message', messageHandler);
		return () => {
			wsChannel?.removeEventListener('message', messageHandler);
		};
	}, [wsChannel]);
	return (
		<div style={{width:'80%' ,height:"85vh" }}>
			
			<Grid container direction='row' >
				<ChatMessages wsChannel={wsChannel} messages={messages} />
				<ChatList messages={messages} />
			</Grid>
		</div>
	);
};
