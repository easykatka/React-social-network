import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../redux/Profile-reducer";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

export const Profile = (props) => { debugger
	const profile = useSelector(state => state.profilesPage.profile)
	const status = useSelector(state => state.profilesPage.status)
	const AuthUserId = useSelector(state => state.auth.userId)
	const formUpdate = useSelector(state => state.profilesPage.formUpdate)
	const dispatch = useDispatch()


  const refreshProfile = () => {

    if (!props.match.params.userId) {debugger
      if (!AuthUserId) {
        props.history.push("/login");
      }
    }
	dispatch(getUserProfile(AuthUserId))
	dispatch(getStatus((AuthUserId)))
  };

  useEffect(() => {
    refreshProfile();
  }, []);

  return (
    <div>
      <ProfileInfo
      //   isOwner={props.isOwner}
      //                profile={props.profile}
      //                status={props.status}
      //                updateStatus={props.updateStatus}
      //                savePhoto={props.savePhoto}
      //                saveProfile={props.saveProfile}
      //                formUpdate={props.formUpdate}
      />
      <MyPostsContainer />
    </div>
  );
};


export default withRouter(Profile);
