import { Grid, IconButton, InputBase } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useFormik } from 'formik';
import { chatForm } from './chatForm_styles';

export const ChatForm = ({ wsChannel }) => {
	const [readyStatus, setReadyStatus] = useState('pending');
	const classes = chatForm();
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => {
			wsChannel?.send(message);
			resetForm();
		},
	});

	useEffect(() => {
		const openHandler = () => {
			setReadyStatus('ready');
		};

		wsChannel?.addEventListener('open', openHandler);
		return () => {
			wsChannel?.removeEventListener('open', openHandler);
		};
	}, [wsChannel]);
	//TODO допилить readystatus
	return (
		<Grid container>
			<Grid component='form' onSubmit={handleSubmit} className={classes.chatForm__container}>
				<InputBase
					className={classes.chatForm__input}
					// disabled={ readyStatus !== 'ready'}
					type='text'
					autoFocus={true}
					placeholder='white a message'
					name='message'
					onChange={handleChange}
					value={values.message}
					endAdornment={
						<IconButton
							// disabled={readyStatus !== 'ready'}
							type='submit'>
							<SendRoundedIcon color='inherit' fontSize='small' />
						</IconButton>
					}
					id='message__input'
				/>
			</Grid>
		</Grid>
	);
};
