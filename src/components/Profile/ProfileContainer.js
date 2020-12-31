import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
class ProfileContainer extends React.Component {debugger
		refreshProfile () {
				let userId = this.props.match.params.userId; //если юзерайди андеф , то мы переходим на авторизационный айди // урл приходит от
				// WithRouter
				if(!userId) {
						userId = this.props.AuthUserId
						if(!userId) {
								this.props.history.push("/login")
						}
				}
				this.props.getUserProfile(userId)
				this.props.getStatus(userId)
		}
		componentDidMount () {
				this.refreshProfile()
		}

		componentDidUpdate (prevProps, prevState, snapshot) {
				if(this.props.match.params.userId !== prevProps.match.params.userId) {
						this.refreshProfile()
				}
		}
		render () {
				return <div>
						<Profile {...this.props}
						         isOwner={!this.props.match.params.userId}
						         profile={this.props.profile}
						         status={this.props.status}
						         updateStatus={this.props.updateStatus}
						         savePhoto={this.props.savePhoto}
						         saveProfile={this.props.saveProfile}
						         formUpdate={this.props.formUpdate}

						/>
				</div>
		}
}

let mapStateToProps = (state) => ({
		profile: state.profilesPage.profile,
		status: state.profilesPage.status,
		AuthUserId: state.auth.userId,
		formUpdate: state.profilesPage.formUpdate
})
export default compose(withRouter,
		 connect(mapStateToProps,
					{getUserProfile, getStatus, updateStatus, savePhoto, saveProfile})
)
(ProfileContainer)