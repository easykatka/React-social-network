import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { ChatMessages } from './chatMessages/chatMessages';
import { ChatNavBar } from './messengerNavBar/messengerNavBar';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateMessages } from './privateMessages/privateMessages';
import { PrivateUserInfo } from './privateUserInfo/privateUserInfo';
import { ChatUsersList } from './chatUsersList/chatUsersList';
import { startMessagesListening, stopMessagesListening } from './../../app/reducers/chat-reducer';

const Messenger = ({ match: { params } }) => {
	const { dialogs } = useSelector((state) => state.dialogs);
	const routerId = params.userId;
	const recipient = dialogs.filter((item) => item.id.toString() === routerId)[0];
	const {status,messages} = useSelector((state) => state.chat);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startMessagesListening());
		return () => {
			dispatch(stopMessagesListening());
		};
	}, []);
	// фильтр тех,кто хоть раз писал в чат
	const usersList = messages.filter(((temp) => (a) => !temp[a.userId] && (temp[a.userId] = true))(Object.create(null)));
	// подписка на канал

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
					{status === 'error' && <div>Some error occured. Please refresh the page</div>}
					<ChatMessages />

					<ChatUsersList users={usersList} />
				</>
			)}
		</Grid>
	);
};

export default withRouter(Messenger);
