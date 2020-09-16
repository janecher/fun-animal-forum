import * as c from './ActionTypes';

export const deletePost = (id) => ({
	type: c.DELETE_POST,
	id,
});

export const toggleForm = () => ({
	type: c.TOGGLE_FORM,
});

export const addPost = (post) => {
	const { title, message, username, timestamp, upvotes, downvotes, id } = post;
	return {
		type: c.ADD_POST,
		title: title,
		message: message,
		username: username,
		timestamp: timestamp,
		upvotes: upvotes,
		downvotes: downvotes,
		id: id,
	};
};

export const selectPost = (post) => {
	const { title, message, username, timestamp, upvotes, downvotes, id } = post;
	return {
		type: c.SELECT_POST,
		title: title,
		message: message,
		username: username,
		timestamp: timestamp,
		upvotes: upvotes,
		downvotes: downvotes,
		id: id,
	};
};
