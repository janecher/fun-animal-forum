import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
	const {
		title,
		username,
		message,
		timestamp,
		upvotes,
		downvotes,
		id,
	} = action;
	switch (action.type) {
		case c.ADD_POST:
			return Object.assign({}, state, {
				[id]: {
					title: title,
					username: username,
					message: message,
					timestamp: timestamp,
					upvotes: upvotes,
					downvotes: downvotes,
					id: id,
				},
			});
		default:
			return state;
	}
};
