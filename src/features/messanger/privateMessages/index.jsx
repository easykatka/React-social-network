import { Avatar, Grid, makeStyles } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { PrivateForm } from './privateForm'
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import { getMessages } from '../../../app/reducers/dialogs-reducer';
import { dateHelper } from '../../../hooks/dateHelper';

const useStyles = makeStyles((theme) => ({
	privateChat__container: {
		backgroundColor: '#36393f',
		padding: 15,
		height: 600,
	},
	privateChat__messageBody: {
		color: '#dcddde',
		wordBreak: 'break-all',
	},
	privateChat__doneIcon: {
		color: 'orange',
		fontSize: 12,
	},
	privateChat__doneAllIcon: {
		color: 'green',
		fontSize: 12,
	},
	privateChat__addedAt: {
		fontSize: 10,
		color: 'grey',
	},
	privateChat__senderName:{
		color:"#fff",
		fontWeight:700

	},
}));
export const PrivateMessages = ({ routerId , recipient }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { messages } = useSelector((state) => state.dialogs);
	const { id } = useSelector((state) => state.auth);
	const { AuthUser } = useSelector((state) => state.profile);

	const messagesEndRef = useRef();

	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => dispatch(getMessages(routerId)
	), [routerId]);
	useEffect(() => scrollToBottom(), [messages]);

	const currentDate = new Date().toISOString().substring(0, 10);
	const dateConvert = (date) => {
		return date.substring(0, 10) === currentDate ? 'today ' + date.substr(11, 5) : date.substr(0, 10).replaceAll('-', '/');
	};
	
	


	return (
		<Grid item xs className={classes.privateChat__container}>
			<Grid item>
				<Grid style={{ overflowY: 'auto', height: 500, padding: 8 }}>
					{messages.items?.map((item, idx) => (
						<div style={{ display: 'flex', padding: '14px 0', borderBottom: '1px solid #40444b' }} key={idx}>
							<Grid item>
								<Avatar alt='avatar' src={item.senderId === AuthUser?.userId ? AuthUser?.photos?.large : recipient?.photos?.large} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<span className={classes.privateChat__senderName} >{item.senderName}</span>
								<Grid className={classes.privateChat__messageBody}>
									<Grid container direction='row' spacing={2} alignItems='center'>
										<Grid item>{item.body}</Grid>
										<Grid item>
											<span>{item.senderId === AuthUser?.userId &&
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
						</div>
					))}
				</Grid>
			</Grid>
			<Grid container>
				<PrivateForm routerId={routerId} />
			</Grid>
	

		</Grid>
	);
};
