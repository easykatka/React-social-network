import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatMessages } from './chatMessages';
import { ChatList } from './chatList';
import { ChatNavBar } from './chatNavBar';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PrivateMessages } from './privateChat';

const Messenger = ({ match: { params } }) => {
	const [wsChannel, setWsChannel] = useState(null);
	const [wsMessages, setWsMessages] = useState([]);
	const { dialogs } = useSelector((state) => state.dialogs);
	const routerId = params.userId;

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
		createChannel();
		return () => {
			ws.removeEventListener('close', closeHandler);
			ws.close();
			//убираем слушатель закрытия канала
		};
	}, []);
	console.log(wsChannel);
	// загружаем сообщения

	// из всех сообщений мы оставляем только объекты с уникальным id
	const usersList = wsMessages.filter(((temp) => (a) => !temp[a.userId] && (temp[a.userId] = true))(Object.create(null)));

	useEffect(() => {
		let messageHandler = (e) => {
			debugger;
			setWsMessages((prev) => [...prev, ...JSON.parse(e.data)]);
		};
		wsChannel?.addEventListener('message', messageHandler);
		return () => {
			wsChannel?.removeEventListener('message', messageHandler);
			console.log('remove message');
		};
	}, [wsChannel]);
	return (
		<div>
			<Grid container direction='row' justify='center'>
				<ChatNavBar dialogs={dialogs} />
				{/* если есть айди в роутере,то рисуется два компонента под чат с юзером */}
				{routerId ? (
					<>
						<PrivateMessages routerId={routerId} />
					</>
				) : (
					<>
						<ChatMessages wsChannel={wsChannel} messages={wsMessages} />
						<ChatList users={usersList} />
					</>
				)}
			</Grid>
		</div>
	);
};

export default withRouter(Messenger);
