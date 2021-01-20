import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatMessages } from './chatMessages';
import { ChatList } from './chatUsersList';
import { ChatNavBar } from './messengerNavBar';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PrivateMessages } from './privateMessages';
import { PrivateUserInfo } from './privateUserInfo';

const Messenger = ({ match: { params } }) => {
	const [wsChannel, setWsChannel] = useState(null);
	const [wsMessages, setWsMessages] = useState([]);
	const { dialogs } = useSelector((state) => state.dialogs);
	const routerId = params.userId;
	const recipient = dialogs.filter((item) => item.id == routerId)[0];
	const usersList = wsMessages.filter(((temp) => (a) => !temp[a.userId] && (temp[a.userId] = true))(Object.create(null)));
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
	// из всех сообщений мы оставляем только объекты с уникальным id

	useEffect(() => {
		let messageHandler = (e) => {
			setWsMessages((prev) => [...prev, ...JSON.parse(e.data)]);
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
				{/* если есть айди в роутере,то рисуем чат */}
				{routerId ? (
					<>
						<PrivateMessages routerId={routerId} recipient={recipient} />
						<PrivateUserInfo recipient={recipient} />
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
