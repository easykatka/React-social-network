import { Grid, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatMessages } from './chatMessages';
import { ChatList } from './chatList';
import { ChatNavBar } from './chatNavBar';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Messanger = ({ match: { params :{userId} } }) => { debugger
	
	const [wsChannel, setWsChannel] = useState(null);
	const [messages, setMessages] = useState([]);
	const usersList = messages.filter(((temp) => (a) => !temp[a.userId] && (temp[a.userId] = true))(Object.create(null)));
	const { dialogs } = useSelector((state) => state.dialogs);
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
		<div>
			<Grid container direction='row' justify='center'>
				<ChatNavBar dialogs={dialogs} />
				{/* если есть айди в роутере,то рисуется два компонента под чат с юзером */}
				{userId ? (
					<>
						<ChatMessages messages={messages} />
						<ChatList component={'messanger'} users={dialogs} />
					</>
				) : (
					<>
						<ChatMessages wsChannel={wsChannel} messages={messages} />
						<ChatList component={'profile'} users={usersList} />
					</>
				)}
			</Grid>
		</div>
	);
};

export default withRouter(Messanger);
