import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
  putNewAvatar
} from "../../app/reducers/profile-reducer";
import { useEffect } from "react";
import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";



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
//TODO пофиксить 6 рендеров !
const Profile = (props) => {
	const classes = useStyles();
  const profile = useSelector((state) => state.profile.profile);
  const status = useSelector((state) => state.profile.status);
  const AuthUserId = useSelector(state => state.auth.id)
  const idFromUrl = props.match.params.userId
  const profileUserId = idFromUrl || AuthUserId	

  console.log(profile)	
  

  const dispatch = useDispatch();
	

  useEffect(() => {
	dispatch(getUserProfile(profileUserId))
  }, [profileUserId]);
  const avatarHandler = (e) => {
	  debugger
	  {
		if (e.target.files.length) {
			dispatch(putNewAvatar(e.target.files[0]));
		}
	  };
  }
  return (
      <Grid container  >
        <Grid item xs={3} className={classes.avatar__block}>
          <Avatar className={classes.avatar_img}
			alt="user foto"
            src={profile?.photos.large }
          />
          {/* <Button color="primary" variant="contained">
            Edit
          </Button> */}
		  {!idFromUrl ? 


		<div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
		type="file"
		style={{display:'none'}}
		onChange={avatarHandler}
      />
      <label htmlFor="contained-button-file">
        <Button fullWidth variant="contained" color="primary" component="span">
          Upload new photo
        </Button>
      </label>
      
    </div>


		  : <Button color="primary" variant="contained">
            Follow
          </Button> }
		  

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

export default withRouter(Profile);
