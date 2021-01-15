import { Avatar, Box, Grid } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import messageSound from '../../../assets/sound/message.mp3';
import useSound from 'use-sound';

export const ChatMessages = ({ wsChannel }) => {
	const [counter, setCounter] = useState(0);
	const messagesEndRef = useRef();
	const [play] = useSound(messageSound);
	const { id } = useSelector((state) => state.auth);
	const [messages, setMessages] = useState([]);
	// скролл вниз и звук при сообщении
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
		const lastMessageId = messages?.[messages.length - 1]?.userId;
		if (counter > 1 && lastMessageId !== id) play();
		setCounter(counter + 1);
		console.log(counter);
	};
	useEffect(() => scrollToBottom(), [messages]);

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
	console.log(messages)

	return (
		<Grid style={{ overflowY: 'scroll', height: '70vh' }}>
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
	);
};
