import { Avatar, Grid } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { PrivateForm } from './privateForm/privateForm';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import { deleteMessage, getMessages } from '../../../app/reducers/dialogs-reducer';
import { dateHelper } from '../../../common/dateHelper';
import { Preloader2 } from '../../../common/preloader2';
import { privateMessages } from './privateMessages_styles';

export const PrivateMessages = ({ routerId, recipient }) => {
	const dispatch = useDispatch();
	const classes = privateMessages();
	const { messages, messagesFething } = useSelector((state) => state.dialogs);
	const { AuthUser } = useSelector((state) => state.profile);
	const messagesEndRef = useRef();
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => {
		dispatch(getMessages(routerId));
	}, [routerId, dispatch]);
	useEffect(() => scrollToBottom(), [messages]);
	console.log(messagesFething);
	return (
		<Grid item xs className={classes.privateChat__container}>
			{messagesFething ? (
				<Preloader2 />
			) : (
				<>
					<Grid className={classes.privateChat__messageContainer}>
						{messages.items?.map((item, idx) => (
							<Grid item className={classes.privateChat__messageContent} key={idx} onClick={() => dispatch(deleteMessage(item.id , routerId))}>
								<Grid item>
									<Avatar
										alt='avatar'
										src={item.senderId === AuthUser?.userId ? AuthUser?.photos?.large : recipient?.photos?.large}
									/>
								</Grid>
								<Grid item style={{ marginLeft: 10 }}>
									<span className={classes.privateChat__senderName}>{item.senderName}</span>
									<Grid className={classes.privateChat__messageBody}>
										<Grid container direction='row' spacing={2} alignItems='center'>
											<Grid item>{item.body}</Grid>
											<Grid item>
												<span>
													{item.senderId === AuthUser?.userId &&
														(item.viewed ? (
															<DoneAllRoundedIcon className={classes.privateChat__doneAllIcon} />
														) : (
															<DoneRoundedIcon className={classes.privateChat__doneIcon} />
														))}
												</span>
												<span className={classes.privateChat__addedAt}>{dateHelper(item.addedAt)}</span>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<div ref={messagesEndRef}></div>
							</Grid>
						))}
					</Grid>
					<Grid container>
						<PrivateForm routerId={routerId} />
					</Grid>
				</>
			)}
		</Grid>
	);
};
