import { Avatar, Grid, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getMessages ,sendMessage } from '../../../app/reducers/dialogs-reducer';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
	chatMessage__container: {
		backgroundColor: '#36393f',
		padding: 15,
		borderRadius: '0 15px 15px 0px',
		height: 600
	},
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

export const PrivateMessages = ({ routerId }) => {
	console.log('render private messages');

	const dispatch = useDispatch();
	const { messages } = useSelector((state) => state.dialogs);
	const messagesEndRef = useRef();
	const classes = useStyles();
	const { handleSubmit, handleChange, values ,resetForm  } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => { 
			dispatch(sendMessage(routerId,message))
			resetForm()
		},
	});

	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => dispatch(getMessages(routerId)), [routerId]);
	useEffect(() => scrollToBottom(), [messages]);


	
	return (
		<Grid item xs className={classes.chatMessage__container}>
			<Grid item>
				<Grid style={{ overflowY: 'auto', height: 500, padding: 8 }}>
					{messages.items
						? messages.items.map((i, idx) => (
								<div style={{ display: 'flex', padding: '14px 0', borderBottom: '1px solid #40444b' }} key={idx}>
									<Grid item>
										<Avatar alt='avatar' src={i.photo || null} />
									</Grid>
									<Grid item style={{ marginLeft: 10 }}>
										<div style={{ color: 'white', fontWeight: 600 }}> {i.userName || i.senderName}</div>
										<div style={{ color: '#dcddde', wordBreak: 'break-all' }}>{i.message || i.body} </div>
									</Grid>
									<div ref={messagesEndRef}></div>
								</div>
						  ))
						: null}
				</Grid>
			</Grid>
			<Grid container stlye={{ width: '100%' }}>
				<Grid component='form' onSubmit={handleSubmit} className={classes.chatForm__container}>
					<InputBase
						className={classes.chatForm__input}
						type='text'
						autoFocus={true}
						placeholder='white a message'
						name='message'
						onChange={handleChange}
						value={values.message}
						id='message'
						endAdornment={
							<IconButton type='submit'>
								<SendRoundedIcon color='inherit' fontSize='small' />
							</IconButton>
						}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};
