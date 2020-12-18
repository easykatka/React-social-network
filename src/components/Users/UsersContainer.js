import React from 'react'
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator, unfollowThunkCreator,} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUser} from "../../redux/users-selectors";




class UsersAPIcomponent extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsersThunkCreator(pageNumber, pageSize)
    }
    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose(
    connect (mapStateToProps, {getUsersThunkCreator, followThunkCreator, unfollowThunkCreator})
)
(UsersAPIcomponent)
