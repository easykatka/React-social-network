import { Avatar, Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ChatForm } from '../chatForm';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	chatMessage__container: {
		backgroundColor: '#36393f',
		padding: 15,
		// height: "100%",
	},
}));

export const ChatMessages = ({ wsChannel, messages }) => { 
	console.log('render chatmessages');
	console.log(messages)
	const messagesEndRef = useRef();
	const classes = useStyles();
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};

	useEffect(() => scrollToBottom(), [messages]);

	return (
		<Grid item xs className={classes.chatMessage__container}>
			<Grid item>
				<Grid style={{ overflowY: 'auto', height: 500, padding: 8 }}>
					{messages?.map((i, idx) => (
						<div style={{ display: 'flex', padding: '14px 0', borderTop: '1px solid #40444b' }} key={idx}>
							<Grid item>
								<Avatar alt='avatar' src={i.photo || null} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<div style={{ color: 'white', fontWeight: 600 }}> {i.userName || i.senderName}</div>
								<div style={{ color: '#dcddde', wordBreak: 'break-all' }}>{i.message || i.body} </div>
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
