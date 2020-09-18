import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
	const {
		title,
		username,
		message,
		timestamp,
		upvotes,
		downvotes,
		id
	} = action;
	switch (action.type) {
		case c.SELECT_POST:
			return {
				[id]: {
					title: title,
					username: username,
					message: message,
					timestamp: timestamp,
					upvotes: upvotes,
					downvotes: downvotes,
					id: id
				}
			};
		case c.SELECT_POST_NULL:
			return null;
		default:
			return state;
	}
};
