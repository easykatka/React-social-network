import { Avatar, Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import messageSound from '../../../assets/sound/message.mp3';
import useSound from 'use-sound';
import { ChatForm } from '../chatForm';

const useStyles = makeStyles((theme) => ({
	chatMessage__container: {

		backgroundColor: '#36393f',
		padding: 15,
		// height: "100%",
	},
}));

export const ChatMessages = ({ wsChannel, messages }) => {
	console.log('render chatmessages');
	const [counter, setCounter] = useState(0);
	const messagesEndRef = useRef();
	const [play] = useSound(messageSound);
	const { id } = useSelector((state) => state.auth);
	const classes = useStyles();

	// скролл вниз и звук при сообщении
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
		const lastMessageId = messages?.[messages.length - 1]?.userId;
		if (counter > 1 && lastMessageId !== id) play();
		setCounter(counter + 1);
	};
	useEffect(() => scrollToBottom(), [messages]);

	return (
		<Grid item xs={7} className={classes.chatMessage__container}>
			<Grid item>
				<Grid style={{ overflowY: 'auto', height: 500, padding: 8 }}>
					{messages.map((i, idx) => (
						<div style={{ display: 'flex', padding: '14px 0', borderBottom: '1px solid #40444b' }} key={idx}>
							<Grid item>
								<Avatar alt='avatar' src={i.photo} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<div style={{ color: 'white', fontWeight: 600 }}> {i.userName}</div>
								<div style={{ color: '#dcddde', wordBreak: 'break-all' }}>{i.message} </div>
							</Grid>
							<div ref={messagesEndRef}></div>
						</div>
					))}
				</Grid>
				<ChatForm wsChannel={wsChannel} />
			</Grid>
		</Grid>
	);
};