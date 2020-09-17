import * as c from '../../actions/ActionTypes';
import * as actions from './../../actions/index.js';

describe('animal forum actions', () => {
	it('deletePost should create DELETE_POST action', () => {
		expect(actions.deletePost(1)).toEqual({
			type: c.DELETE_POST,
			id: 1,
		});
	});
	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: c.TOGGLE_FORM,
		});
	});

	it('addPost should create ADD_POST action', () => {
		expect(
			actions.addPost({
				title: 'New Fact',
				username: 'Mars',
				message: 'animals are cute',
				timestamp: new Date(),
				upvotes: 0,
				downvotes: 0,
				id: 1,
			})
		).toEqual({
			type: c.ADD_POST,
			title: 'New Fact',
			username: 'Mars',
			message: 'animals are cute',
			timestamp: new Date(),
			upvotes: 0,
			downvotes: 0,
			id: 1,
		});
	});

	it('selectPost should create SELECT_POST action', () => {
		expect(
			actions.selectPost({
				title: 'New Fact',
				username: 'Mars',
				message: 'animals are cute',
				timestamp: '2020-09-16T20:07:59.113Z',
				upvotes: 0,
				downvotes: 0,
				id: 1,
			})
		).toEqual({
			type: c.SELECT_POST,
			title: 'New Fact',
			username: 'Mars',
			message: 'animals are cute',
			timestamp: '2020-09-16T20:07:59.113Z',
			upvotes: 0,
			downvotes: 0,
			id: 1,
		});
	});
});
