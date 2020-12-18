import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <div>
      <ProfileInfo isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}
                   formUpdate={props.formUpdate}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;