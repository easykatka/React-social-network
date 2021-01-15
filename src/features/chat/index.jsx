import { Grid, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatForm } from './chatForm';
import { ChatMessages } from './chatMessages';

// offsetHeight, scrollTop, scrollHeight.
export const Chat = () => {
	const [wsChannel, setWsChannel] = useState(null);

	console.log('render chat');

	// подписка на канал
	useEffect(() => {
		let ws;
		const closeHandler = () => {
			console.log('close WS');
			setTimeout(createChannel, 3000);
		};

		const createChannel = () => {
			ws?.removeEventListener('close', closeHandler);
			ws?.close();
			ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
			ws.addEventListener('close', closeHandler);
			setWsChannel(ws);
		};
		createChannel();
		return () => {
			ws.removeEventListener('close', closeHandler);
			ws.close();
			console.log('убираем слушатель закрытия канала');
		};
	}, []);
	return (
		<Paper>
			<Grid item xs={12}>
				<ChatMessages wsChannel={wsChannel} />
				<ChatForm wsChannel={wsChannel} />
			</Grid>
		</Paper>
	);
};
