import { Avatar, Grid, IconButton } from '@material-ui/core';
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
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export const PrivateMessages = ({ routerId, recipient }) => {
	const dispatch = useDispatch();
	const classes = privateMessages();
	const { messagesFething,messages } = useSelector((state) => state.dialogs);
	const { authUser } = useSelector((state) => state.profile);
	const messagesEndRef = useRef();
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => {
		dispatch(getMessages(routerId));
	}, [routerId, dispatch]);
	useEffect(() => scrollToBottom(), [messages]);

	return (
		<Grid item xs className={classes.privateMessages__container}>
			{messagesFething ? (
				<Preloader2 />
			) : (
				<>
					<Grid className={classes.privateMessages__messagesList}>
						{messages && messages.map((item, idx) => (
							<Grid
								item
								className={classes.privateMessages__messageContent}
								key={idx}
								onClick={() => dispatch(deleteMessage(item.id, routerId))}>
								<Grid item>
									<Avatar
										alt='avatar'
										src={item.senderId === authUser?.userId ? authUser?.photos?.large : recipient?.photos?.large}
									/>
								</Grid>
								<Grid item style={{ marginLeft: 10 }}>
									<span className={classes.privateMessages__senderName}>{item.senderName}</span>
									<Grid className={classes.privateMessages__messageBody}>
										<Grid container direction='row' spacing={2} alignItems='center'>
											<Grid item>{item.body}</Grid>
											<Grid item>
												<span>
													{item.senderId === authUser?.userId &&
														(item.viewed ? (
															<DoneAllRoundedIcon className={classes.privateMessages__doneAllIcon} />
														) : (
															<DoneRoundedIcon className={classes.privateMessages__doneIcon} />
														))}
												</span>
												<span className={classes.privateMessages__addedAt}>{dateHelper(item.addedAt)}</span>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<IconButton className={classes.privateMessages__deleteIcon}>
									<DeleteOutlineOutlinedIcon />
								</IconButton>
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
