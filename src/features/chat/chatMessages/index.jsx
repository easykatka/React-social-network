import { Avatar, Box, Grid, Paper } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import messageSound from '../../../assets/sound/message.mp3';
import useSound from 'use-sound';
import { ChatForm } from '../chatForm';

export const ChatMessages = ({ wsChannel, messages }) => {
	console.log('render chatmessages');
	const [counter, setCounter] = useState(0);
	const messagesEndRef = useRef();
	const [play] = useSound(messageSound);
	const { id } = useSelector((state) => state.auth);

	// скролл вниз и звук при сообщении
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
		const lastMessageId = messages?.[messages.length - 1]?.userId;
		if (counter > 1 && lastMessageId !== id) play();
		setCounter(counter + 1);
	};
	useEffect(() => scrollToBottom(), [messages]);

	return (
		<Grid item xs={8}>
			<Paper >
				<Grid item style={{ overflowY: 'auto', height: '70vh',padding:8 }}>
					{messages.map((i, idx) => (
						<Box p={1} key={idx}>
							<Grid container direction='row'>
								<Link to={'/profile/' + i.userId}>
									<Avatar alt='avatar' src={i.photo} />
								</Link>
								<div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
									<strong> {i.userName}</strong>
									{i.message}
								</div>
								<div ref={messagesEndRef}></div>
							</Grid>
						</Box>
					))}
				</Grid>
				<ChatForm wsChannel={wsChannel} />
			</Paper>
		</Grid>
	);
};
