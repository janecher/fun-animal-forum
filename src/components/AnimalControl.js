import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
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
		if (this.props.selectedPost != null) {
			const action2 = a.selectPostToNull();
			dispatch(action2);
		} else {
			const action = a.toggleForm();
			dispatch(action);
		}
	};

	handleChangingSelectedPost = (id) => {
		const { dispatch } = this.props;
		const selectedPostInMasterPostList = this.props.masterPostList[id];
		const action = a.selectPost(selectedPostInMasterPostList);
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
		const addOneUpVote = postToUpVote.upvotes + 1;
		postToUpVote.upvotes = addOneUpVote;
		const action = a.addPost(postToUpVote);
		dispatch(action);
	};

	handleDownVote = (postId) => {
		const postToDownVote = this.props.masterPostList[postId];
		const { dispatch } = this.props;
		const addOneDownVote = postToDownVote.downvotes + 1;
		postToDownVote.downvotes = addOneDownVote;
		const action = a.addPost(postToDownVote);
		dispatch(action);
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.props.selectedPost !== null) {
			currentlyVisibleState = <PostDetail post={this.props.selectedPost} onClickingUpVote={this.handleUpVote} onClickingDownVote={this.handleDownVote} />;
			buttonText = 'Return to post list';
		} else if (this.props.formVisibleOnPage) {
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
					onClickingPost={this.handleChangingSelectedPost}
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
	selectedPost: PropTypes.object,
};

const mapStateToProps = (state) => {
	const copyOfMasterPostList = {};
	Object.keys(state.masterPostList)
		.sort(function (id, id2) {
			return (
				state.masterPostList[id2].upvotes - state.masterPostList[id].upvotes
			);
		})
		.forEach(function (id) {
			copyOfMasterPostList[id] = state.masterPostList[id];
		});
	console.log(state);
	return {
		masterPostList: copyOfMasterPostList,
		formVisibleOnPage: state.formVisibleOnPage,
		selectedPost: state.selectedPost,
	};
};

AnimalControl = connect(mapStateToProps)(AnimalControl);

export default AnimalControl;
