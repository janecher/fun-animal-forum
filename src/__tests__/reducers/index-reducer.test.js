import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';
import selectedPostReducer from '../../reducers/selected-post-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
	test('Should return default state if no action type is supplied', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			masterPostList: {},
			formVisibleOnPage: false,
			selectedPost: null,
		});
	});

	test('Check that initial state of postListReducer matches root reducer', () => {
		expect(store.getState().masterPostList).toEqual(
			postListReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		expect(store.getState().formVisibleOnPage).toEqual(
			formVisibleReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of selectedPostReducer matches root reducer', () => {
		expect(store.getState().selectedPost).toEqual(
			selectedPostReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of postListReducer matches root reducer', () => {
		const action = {
			type: c.ADD_POST,
			title: 'Elephants!',
			message: 'they think we are cute',
			username: 'Mars',
			timestamp: new Date(),
			upvotes: 0,
			downvotes: 0,
			id: 1,
		};
		store.dispatch(action);
		expect(store.getState().masterPostList).toEqual(
			postListReducer(undefined, action)
		);
	});

	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		const action = {
			type: c.TOGGLE_FORM,
		};
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(
			formVisibleReducer(undefined, action)
		);
	});

	test('Check that initial state of selectedPostReducer matches root reducer', () => {
		const action = {
			type: c.SELECT_POST,
			title: 'Elephants!',
			message: 'they think we are cute',
			username: 'Mars',
			timestamp: new Date(),
			upvotes: 0,
			downvotes: 0,
			id: 1,
		};
		store.dispatch(action);
		expect(store.getState().selectedPost).toEqual(
			selectedPostReducer(undefined, action)
		);
	});
});
