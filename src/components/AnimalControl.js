import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class AnimalControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, username, message, timestamp, upvotes, downvotes } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      username: username,
      message: message,
      timestamp: timestamp,
      upvotes: upvotes,
      downvotes: downvotes
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleUpVote = (postId) => {
    const postToUpVote = this.props.masterPostList[postId];
    const { dispatch } = this.props;
    const { id, title, username, message, timestamp, upvotes, downvotes } = postToUpVote;
    const addOneUpVote = upvotes + 1;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      username: username,
      message: message,
      timestamp: timestamp,
      upvotes: addOneUpVote,
      downvotes: downvotes
    }
    dispatch(action);
  }

  handleDownVote = (postId) => {
    const postToDownVote = this.props.masterPostList[postId];
    const { dispatch } = this.props;
    const { id, title, username, message, timestamp, upvotes, downvotes } = postToDownVote;
    const addOneDownVote = downvotes + 1;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      username: username,
      message: message,
      timestamp: timestamp,
      upvotes: upvotes,
      downvotes: addOneDownVote
    }
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to post list";
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList} onClickingUpVote={this.handleUpVote} onClickingDownVote={this.handleDownVote} />
      buttonText = "Add new post";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );

  }
}

export default AnimalControl;