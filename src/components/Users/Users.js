import React from "react";
import userPhoto from "../../logo.svg";
import { NavLink } from "react-router-dom";
import { Paginator } from "../common/Paginator/paginator";
import '../../index.css'

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  ...props
}) => {
  return (
    <div className='container'>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.users.map((g) => (
        <div key={g.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + g.id}>
                <img width="50px"
				  src={g.photos.small != null ? g.photos.small : userPhoto}
				  alt='pop'
                  className={userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {g.followed ? ( 
                <button
                  disabled={props.followingInProgress.some((id) => id === g.id)}
                  onClick={() => {
                
                    props.unfollowThunkCreator(g.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === g.id)}
                  onClick={() => {
                    props.followThunkCreator(g.id);
                  }}
                >
                  {" "}
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{g?.name}</div>
            <div>Status:{g?.status}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
