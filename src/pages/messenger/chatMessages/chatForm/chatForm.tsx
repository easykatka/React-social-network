import { Grid, InputBase } from '@material-ui/core';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { sendMessage } from '../../../../app/reducers/chat-reducer';
import { RootState } from '../../../../app/store';
import { chatForm } from './chatForm_styles';
import { useAppDispatch } from './../../../../app/store';


export const ChatForm: React.FC = () => {
	const { status } = useSelector((state: RootState) => state.chat);
	const dispatch = useAppDispatch()
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
					placeholder='write a message'
					name='message'
					onChange={handleChange}
					value={values.message}
					id='message__input'
				/>
			</Grid>
		</Grid>
	);
};
