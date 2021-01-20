import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatMessages } from './chatMessages/chatMessages';
import { ChatNavBar } from './messengerNavBar/messengerNavBar';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateMessages } from './privateMessages/privateMessages';
import { PrivateUserInfo } from './privateUserInfo';
import { ChatUsersList } from './chatUsersList/chatUsersList';

const Messenger = ({ match: { params } }) => {
	const [wsChannel, setWsChannel] = useState(null);
	const [wsMessages, setWsMessages] = useState([]);
	const { dialogs } = useSelector((state) => state.dialogs);
	const routerId = params.userId;
	const recipient = dialogs.filter((item) => item.id.toString() === routerId)[0];
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
		<Grid container direction='row' justify='center'>
			<ChatNavBar dialogs={dialogs} />
			{routerId ? (
				<>
					<PrivateMessages routerId={routerId} recipient={recipient} />
					<PrivateUserInfo recipient={recipient} />
				</>
			) : (
				<>
					<ChatMessages wsChannel={wsChannel} messages={wsMessages} />
					<ChatUsersList users={usersList} />
				</>
			)}
		</Grid>
	);
};

export default withRouter(Messenger);
