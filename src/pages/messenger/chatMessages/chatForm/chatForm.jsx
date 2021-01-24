import { Grid, IconButton, InputBase } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../../app/reducers/chat-reducer';
import { chatForm } from './chatForm_styles';


export const ChatForm = () => {
	const {status} = useSelector((state) => state.chat);
	const dispatch = useDispatch()
	const classes = chatForm();
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => {
			dispatch(sendMessage(message));
			resetForm();
		},
	});

	return (
		<Grid container>
			<Grid component='form' onSubmit={handleSubmit} className={classes.chatForm__container}>
				<InputBase
					className={classes.chatForm__input}
					disabled={status !== 'ready'}
					type='text'
					autoFocus={true}
					placeholder='white a message'
					name='message'
					onChange={handleChange}
					value={values.message}
					endAdornment={
						<IconButton
						disabled={status !== 'ready'}
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
