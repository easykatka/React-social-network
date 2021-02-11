import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { sendMessage } from '../../app/reducers/chat-reducer';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/store';
import { ChatInput } from '../CustomInput/ChatInput';


export const ChatForm: React.FC = () => {
	const { status } = useSelector((state: RootState) => state.chat);
	const dispatch = useAppDispatch()
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => {
			message && dispatch(sendMessage(message));
			resetForm();
		},
	});
	return (
		<ChatInput
			handleSubmit={handleSubmit}
			onChange={handleChange}
			value={values.message}
			disabled={status !== 'ready'}
		/>
	);
};
