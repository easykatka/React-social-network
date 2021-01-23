import { Avatar, Grid } from '@material-ui/core';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ChatForm } from './chatForm/chatForm';
import React from 'react';
import { chatMessages } from './chatMessages_styles';

export const ChatMessages = ({ wsChannel, messages }) => {
	const messagesEndRef = useRef();
	const classes = chatMessages();
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => scrollToBottom(), [messages]);
	return (
		<Grid item xs className={classes.chatMessage__container}>
			<Grid item>
				<Grid className={classes.chatMessage__messagesContainer}>
					{messages?.map((i, idx) => (
						<Grid className={classes.chatMessage__container} key={idx}>
							<Grid item>
								<Avatar alt='avatar' src={i?.photo} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<p className={classes.chatMessage__senderName}> {i.userName}</p>
								<p className={classes.chatMessage__body}>{i.message} </p>
							</Grid>
							<p ref={messagesEndRef}></p>
						</Grid>
					))}
				</Grid>
				<ChatForm wsChannel={wsChannel} />
			</Grid>
		</Grid>
	);
};
