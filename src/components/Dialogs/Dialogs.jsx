import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
	let state = props.dialogPage;
	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

	let addNewMessage = (value) =>
	props.sendmsg(value.newMessageBody)


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}</div>

			<AddMessageFormRedux onSubmit={addNewMessage}  />


		</div>
	)
}


const maxln = maxLengthCreator(20)
const AddMessageForm = (props) =>
{
	return 			<form onSubmit={props.handleSubmit}>

		<div className={s.addpost}>
			<Field component={FormControl}
						 typeF="textarea"
						 validate={[required, maxln ]}
						 name="newMessageBody" placeholder='Enter your message' />
			<button>Add post</button>
		</div>
	</form>
}

const AddMessageFormRedux = reduxForm ({form : "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;