import selectedPostReducer from '../../reducers/selected-post-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedPostReducer', () => {
	let action;

	const postData = {
		title: 'Mysterious Eels',
		username: 'kate',
		message:
			'Scientists still have not observed eels breeding in their natural habitat -- the deepest trenches in the ocean.',
		timestamp: '2020-09-16T18:54:49.394Z',
		upvotes: 0,
		downvotes: 0,
		id: 1,
	};

	test('Should return null if no post is selected', () => {
		expect(selectedPostReducer(null, { type: null })).toEqual(null);
	});

	test('Should return selected post', () => {
		const {
			title,
			username,
			message,
			timestamp,
			upvotes,
			downvotes,
			id,
		} = postData;
		action = {
			type: c.SELECT_POST,
			title: title,
			username: username,
			message: message,
			timestamp: timestamp,
			upvotes: upvotes,
			downvotes: downvotes,
			id: id,
		};
		expect(selectedPostReducer(null, action)).toEqual({
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
	});
});
