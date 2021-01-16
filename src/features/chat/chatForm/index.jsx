import { Box, IconButton, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

import SendRoundedIcon from '@material-ui/icons/SendRounded';

export const ChatForm = ({ wsChannel }) => {
	const [message, setMessage] = useState('');
	const [readyStatus, setReadyStatus] = useState('pending');
	useEffect(() => {
		let openHandler = () => {
			setReadyStatus('ready');
		};
		wsChannel?.addEventListener('open', openHandler);
		return () => {
			wsChannel?.removeEventListener('open', openHandler);
		};
	}, [wsChannel]);
	const SendMessage = (e) => {
		e.preventDefault();
		if (message) {
			wsChannel?.send(message);
			setMessage('');
		}
	};
	return (
		<Box p={3}>
			<form onSubmit={SendMessage} style={{alignItems:'center',display:'flex'}}>
				<TextField
					disabled={wsChannel === null || readyStatus !== 'ready'}
					type='text'
					autoFocus={true}
					variant='outlined'
					placeholder='white a message'
					style={{width:'85%'}}
					size='small'
					name='message'
					onChange={(e) => setMessage(e.currentTarget.value)}
					value={message}
					id='message__input'
				/>
				<IconButton type='submit' disabled={wsChannel === null || readyStatus !== 'ready'}>
					<SendRoundedIcon color='primary' />
				</IconButton>
			</form>
		</Box>
	);
};
