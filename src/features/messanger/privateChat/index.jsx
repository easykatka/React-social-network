import { Avatar, Grid, makeStyles } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getMessages } from '../../../app/reducers/dialogs-reducer';
import { PrivateForm } from '../privateForm';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

const useStyles = makeStyles((theme) => ({
	privateChat__container: {
		backgroundColor: '#36393f',
		padding: 15,
		borderRadius: '0 15px 15px 0px',
		height: 600,
	},
	privateChat__messageBody: {
		color: '#dcddde',
		wordBreak: 'break-all',
	},
}));
export const PrivateMessages = ({ routerId }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { messages , dialogs } = useSelector((state) => state.dialogs);
	const {id} = useSelector(state => state.auth)
	console.log(id , dialogs , messages)
	const messagesEndRef = useRef();

	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => dispatch(getMessages(routerId)), [routerId]);
	useEffect(() => scrollToBottom(), [messages]);

	return (
		<Grid item xs className={classes.privateChat__container}>
			<Grid item>
				<Grid style={{ overflowY: 'auto', height: 500, padding: 8 }}>
					{messages.items?.map((item, idx) => (
						<div style={{ display: 'flex', padding: '14px 0', borderBottom: '1px solid #40444b' }} key={idx}>
							<Grid item>
								<Avatar alt='avatar' src={item.photo || null} />
							</Grid>
							<Grid item style={{ marginLeft: 10 }}>
								<div style={{ color: 'white', fontWeight: 600 }}>
									{item.senderName}
									{item.addedAt}
								</div>
								<Grid className={classes.privateChat__messageBody}>
									<Grid container direction='row' spacing={2} alignItems='center'>
										<Grid item>{item.body}</Grid>
										<Grid item>
											{item.viewed ? (
												<DoneAllRoundedIcon style={{ color: 'green' }} />
											) : (
												<DoneRoundedIcon style={{ color: 'orange' }} />
											)}
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
