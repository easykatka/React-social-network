import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

	let postsElements =
		props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

	let onAddPost = (value) => {debugger
		props.addPost(value.AddPostBody)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<AddPostFormRedux onSubmit={onAddPost}/>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}
const ml20 = maxLengthCreator(20)

const AddPostForm = (props) =>
{return 				<form onSubmit={props.handleSubmit}>
	<div>
		<div>
			<Field 	typeF="textarea"
							component={FormControl}
						 name="AddPostBody"
						 placeholder='Enter your message'
						 validate={[required , ml20  ]} />
		</div>
		<div>
			<button>Add post</button>
		</div>
	</div>
</form>}




const AddPostFormRedux = reduxForm ({form : "userAddPostForm" })(AddPostForm)

export default MyPosts;