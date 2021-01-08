import { Input, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putNewStatus } from "../../../app/reducers/profile-reducer";
const ProfileStatus = ({idFromUrl}) => {
  const status = useSelector((state) => state.profile.status);
  const [editMode, setEditMode] = useState(false);
  const [userStatus, setUserStatus] = useState(status);
  const dispatch = useDispatch();
  useEffect(() => {
    setUserStatus(status);
  }, [status]);

  const activateMode = () => {
    setEditMode(true);
  };
  const deactivateMode = () => {
    setEditMode(false);
    dispatch(putNewStatus(userStatus));
  };
  const onStatusChange = (e) => {
    setUserStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode && !idFromUrl ? (
        <Input
          autoFocus={true}
          onChange={onStatusChange}
          onBlur={deactivateMode}
          value={userStatus}
        />
      ) : (
        <Typography onClick={activateMode}> {status} </Typography>
      )}
    </div>
  );
};

export default ProfileStatus;
