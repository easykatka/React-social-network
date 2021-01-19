import { Grid, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useFormik } from 'formik';

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
		width: 500,
	},
}));

export const ChatForm = ({ wsChannel }) => {
	const [readyStatus, setReadyStatus] = useState('pending');
	const classes = useStyles();
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => {
			wsChannel?.send(message);
			resetForm();
		},
	});

	useEffect(() => { debugger
		const openHandler = () => { 
			setReadyStatus('ready');
		}
		
		wsChannel?.addEventListener('open', openHandler);
		return () => { debugger
			wsChannel?.removeEventListener('open', openHandler);
			console.log('remove open');
		};
	}, [wsChannel]);
	console.log(readyStatus)

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
