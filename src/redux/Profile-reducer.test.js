import profilesReducer, {addPostActionCreator} from "./Profile-reducer";


it('render without crashing' , () => {
	let state =  {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 12},
			{id: 2, message: 'It\'s my first post', likesCount: 11},
			{id: 3, message: 'Blabla', likesCount: 11},
			{id: 4, message: 'Dada', likesCount: 11}]
	}
	let action = addPostActionCreator("irksa")
	let newState = profilesReducer (state,action)

	expect(newState.posts.length).toBe(5);

})
