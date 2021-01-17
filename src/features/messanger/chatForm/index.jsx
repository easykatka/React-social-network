import { Grid, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
	chatForm__container: {
		backgroundColor: '#40444b',
		alignItems: 'center',
		marginTop: 20,
		borderRadius: 7,
	},
	chatForm__input: {
		color: 'white',
		marginLeft: 15,
		width: '85%',
	},
}));

export const ChatForm = ({ wsChannel }) => {
	const [message, setMessage] = useState('');
	const [readyStatus, setReadyStatus] = useState('pending');
	const classes = useStyles();
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
	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<Grid component='form' onSubmit={SendMessage} className={classes.chatForm__container}>
			<InputBase
				className={classes.chatForm__input}
				disabled={wsChannel === null || readyStatus !== 'ready'}
				type='text'
				autoFocus={true}
				placeholder='white a message'
				size='small'
				name='message'
				onChange={(e) => setMessage(e.currentTarget.value)}
				value={message}
				id='message__input'
			/>
			<IconButton type='submit' disabled={wsChannel === null || readyStatus !== 'ready'}>
				<SendRoundedIcon color='inherit' fontSize='small' />
			</IconButton>
		</Grid>
	);
};
