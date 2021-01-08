import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
  putNewAvatar,
} from "../../app/reducers/profile-reducer";
import { useEffect } from "react";
import { Avatar, Button, FormControl, Grid, Input, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import ProfileStatus from "./profileStatus";
import { ProfileInfo } from "./profileInfo";

const useStyles = makeStyles((theme) => ({
  avatar__block: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),

    "&>*": { width: "100%" },
  },
  userInfo__block: {
    padding: theme.spacing(2),
  },
  useInfo__status: {
    width: "100%",
    justifyContent: "left",
    textTransform: "none",
  },
  avatar_img: {
    borderRadius: theme.spacing(1),
    width: "100%",
    height: theme.spacing(30),
    marginBottom: theme.spacing(1),
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const profile = useSelector((state) => state.profile.profile);

  const AuthUserId = useSelector((state) => state.auth.id);
  const idFromUrl = props.match.params.userId;
  const profileUserId = idFromUrl || AuthUserId;
  const dispatch = useDispatch();


  useEffect(() => {
    if (profileUserId) {
      dispatch(getUserProfile(profileUserId));
    }
  }, [profileUserId]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper className={classes.avatar__block} elevation={0}>
          <Avatar
            className={classes.avatar_img}
            alt="user foto"
            src={profile?.photos.large}
          />
          {/* <Button color="primary" variant="contained">
            Edit
          </Button> */}
          {!idFromUrl ? (
            <div>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: "none" }}
                onChange={(e) => dispatch(putNewAvatar(e.target.files[0]))}
              />
              <label htmlFor="contained-button-file">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload new photo
                </Button>
              </label>
            </div>
          ) : (
            <Button color="primary" variant="contained">
              Follow
            </Button>
          )}{" "}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.userInfo__block}>
          <Typography variant="h4">{profile?.fullName}</Typography>
		  <ProfileStatus idFromUrl={idFromUrl}/>
		  <ProfileInfo/>
        </Paper>
      </Grid>
    </Grid>
  );
};


export default withRouter(Profile);
