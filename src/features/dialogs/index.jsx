import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dialogsAPI } from '../../api/dialogs-api';
import { getDialogs, setDialogs } from '../../app/reducers/dialogs-reducer';
import { ChatList } from '../chat/chatList';
import { ChatMessages } from '../chat/chatMessages';

export const Messenger = () => {
	const {dialogs} = useSelector(state => state.dialogs)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getDialogs())
		
	}, []);
	const allDialogs = [
		{
			hasNewMessages: false,
			id: 14063,
			lastDialogActivityDate: '2021-01-15T02:13:53.623',
			lastUserActivityDate: '2021-01-15T11:26:00.543',
			newMessagesCount: 0,
			photos: { small: null, large: null },
			userName: 'Mihail_M',
		},
		{
			hasNewMessages: false,
			id: 14067,
			lastDialogActivityDate: '2021-01-15T02:13:31.69',
			lastUserActivityDate: '2021-01-14T20:17:46.343',
			newMessagesCount: 0,
			photos: { small: null, large: null },
			userName: 'AleksandrStark',
		},
	];
	const messages = {
		error: null,
		items: [{
			addedAt: '2021-01-17T00:12:51.317',
			body: 'Hey mate',
			id: '5ce1291e-9100-4991-8600-1296e45d495d',
			recipientId: 14067,
			senderId: 7847,
			senderName: 'Kaoru',
			translatedBody: null,
			viewed: false,
		}],
		totalCount: 0,
	};

	console.log(dialogs)
	return (
		<>
			{/* <ChatMessages messages={messages} /> */}
			<ChatList usersList={dialogs}  component={'dialogs'}/>
			<Button onClick={() => dialogsAPI.getDialogs()}>Get all dialogs</Button>
			<Button onClick={() => dialogsAPI.getMessages(7847)}> Get messages from id</Button>
			<Button onClick={() => dialogsAPI.sendMessage(7847, 'Hey mate')}> send message for id</Button>
			<Button onClick={() => dialogsAPI.startDialog(50)}> Start dialogs</Button>
		</>
	);
};
