import { Grid, InputBase } from '@material-ui/core';
import { chatForm } from './chatInput_styles';

interface IProps {
	handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
	handleChange: {
		(e: React.ChangeEvent<any>): void
	},
	message: string,
	
}

export const ChatInput: React.FC<IProps> = ({handleSubmit,handleChange,message},...props) => {
	const classes = chatForm()

	return (
		<Grid component='form' onSubmit={handleSubmit} className={classes.chatForm__container}>
			<InputBase inputProps={props}
				className={classes.chatForm__input}
				type='text'
				autoFocus={true}
				placeholder='write a message'
				name='message'
				onChange={handleChange}
				value={message}
				id='message' 
			/>
		</Grid>
	);
};




