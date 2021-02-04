import { Avatar, Grid } from '@material-ui/core';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ChatForm } from './ChatForm/ChatForm';
import React from 'react';
import { chatMessages } from './chatMessages_styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const ChatMessages: React.FC = () => {
	const messages = useSelector((state: RootState) => state.chat.messages)
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const classes = chatMessages();
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => scrollToBottom(), [messages]);


	return (
		<Grid item xs className={classes.root}>
			<Grid item>
				<Grid className={classes.messagesWrapper}>
					{messages?.map((i, idx) => (
						<Grid className={classes.message} key={idx}>
							<Grid item>
								<Avatar alt='avatar' src={i?.photo} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<p className={classes.senderName}> {i.userName}</p>
								<p className={classes.messageBody}>{i.message} </p>
							</Grid>
							<div ref={messagesEndRef}></div>
						</Grid>
					))}
				</Grid>
				<ChatForm />
			</Grid>
		</Grid>
	);
};
