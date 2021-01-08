import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../app/reducers/profile-reducer";
import { useEffect } from "react";
import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import defaultAvatar from "../../img/defaultAvatar.svg";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
	avatar__block:{
		padding:theme.spacing(1),
		"&>*":
		{width:'100%'}},
		avatar_img:{
			borderRadius:theme.spacing(1),
			height:theme.spacing(30),
			marginBottom:theme.spacing(1)
			
		}
	}))

const Profile = (props) => {
	const classes = useStyles();
  const profile = useSelector((state) => state.profile.profile);
  const status = useSelector((state) => state.profile.status);
  const AuthUserId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus(AuthUserId));
  }, []);
  console.log(profile)

  return (
   
      <Grid container  >
        <Grid item xs={3} className={classes.avatar__block}>

          <Avatar className={classes.avatar_img}
			alt="user foto"
            src={profile?.photos.large || defaultAvatar}
          />
          <Button color="primary" variant="contained">
            Edit
          </Button>
        </Grid>
		<Grid item xs={7} className={classes.userInfo__block}>
        <b>Full name :</b> : {profile?.fullName}
      <div>
        <b>Looking for a Job</b> : {profile?.lookingForAJob ? "yes" : "no"}
        {profile?.lookingForAJob && (
          <div>
            <b>My proffesional skills</b> {profile?.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        <b>Contacts :</b> :
         {profile ? Object.keys(profile?.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
		  )}) : null}
      </div>
      <div>
        <b>About me :</b> : {profile?.aboutMe}
      </div>
    
		</Grid>
		
      </Grid>
 
  );
};
const Contact = ({ contactTitle, contactValue }) => {
	return (
	  <div>
		<b>{contactTitle}</b> : {contactValue}
	  </div>
	);
  };

export default Profile;
