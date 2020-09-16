import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class AnimalControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleAddingNewPostToList = (newPost) => {
		const { dispatch } = this.props;
		const action = a.addPost(newPost);
		dispatch(action);
		const action2 = a.toggleForm();
		dispatch(action2);
	};

	handleUpVote = (postId) => {
		const postToUpVote = this.props.masterPostList[postId];
		const { dispatch } = this.props;
		//const { id, title, username, message, timestamp, upvotes, downvotes } = postToUpVote;
		const addOneUpVote = postToUpVote.upvotes + 1;
		postToUpVote.upvotes = addOneUpVote;
		const action = a.addPost(postToUpVote);
		// {
		//   type: 'ADD_POST',
		//   id: id,
		//   title: title,
		//   username: username,
		//   message: message,
		//   timestamp: timestamp,
		//   upvotes: addOneUpVote,
		//   downvotes: downvotes
		// }
		dispatch(action);
	};

	handleDownVote = (postId) => {
		const postToDownVote = this.props.masterPostList[postId];
		const { dispatch } = this.props;
		//const { id, title, username, message, timestamp, upvotes, downvotes } = postToDownVote;
		const addOneDownVote = postToDownVote.downvotes + 1;
		postToDownVote.downvotes = addOneDownVote;
		const action = a.addPost(postToDownVote);
		// {
		//   type: 'ADD_POST',
		//   id: id,
		//   title: title,
		//   username: username,
		//   message: message,
		//   timestamp: timestamp,
		//   upvotes: upvotes,
		//   downvotes: addOneDownVote
		// }
		dispatch(action);
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.props.formVisibleOnPage) {
			currentlyVisibleState = (
				<NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
			);
			buttonText = 'Return to post list';
		} else {
			currentlyVisibleState = (
				<PostList
					postList={this.props.masterPostList}
					onClickingUpVote={this.handleUpVote}
					onClickingDownVote={this.handleDownVote}
				/>
			);
			buttonText = 'Add new post';
		}
		return (
			<React.Fragment>
				<button onClick={this.handleClick}>{buttonText}</button>
				{currentlyVisibleState}
			</React.Fragment>
		);
	}
}

AnimalControl.propTypes = {
	masterPostList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
	const copyOfMasterPostList = {};
	Object.keys(state.masterPostList)
		.sort(function (id, id2) {
			return (
				state.masterPostList[id2].upvotes - state.masterPostList[id].upvotes
			);
		})
		.forEach(function (upvotes) {
			copyOfMasterPostList[upvotes] = state.masterPostList[upvotes];
		});
	return {
		masterPostList: copyOfMasterPostList,
		formVisibleOnPage: state.formVisibleOnPage,
	};
};

AnimalControl = connect(mapStateToProps)(AnimalControl);

export default AnimalControl;
