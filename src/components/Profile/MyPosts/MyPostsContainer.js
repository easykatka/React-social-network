
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {actions} from "../../../redux/Profile-reducer";


let mapStateToProps = (state) => {
	return {
		posts: state.profilesPage.posts,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (AddPostBody) => dispatch(actions.addPostActionCreator(AddPostBody))
	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;








