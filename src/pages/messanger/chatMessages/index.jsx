import { Avatar, Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ChatForm } from './chatForm';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	chatMessage__container: {
		backgroundColor: '#36393f',
		padding: 15,
	},
	chatMessage__senderName: {
		color: 'white',
		fontWeight: 700,
	},
	chatMessage__body: {
		color: '#dcddde',
		wordBreak: 'break-all',
	},
}));

export const ChatMessages = ({ wsChannel, messages }) => {
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
								<Avatar alt='avatar' src={i?.photo} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<p className={classes.chatMessage__senderName}> {i.userName || i.senderName}</p>
								<p className={classes.chatMessage__body}>{i.message || i.body} </p>
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
