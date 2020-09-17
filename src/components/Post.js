import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
	return (
		<React.Fragment>
			<div onClick={() => props.whenPostClicked(props.id)}>
				<h3>{props.title}</h3>
				<h3>{props.message}</h3>
				<h3>{props.timestamp.toString()}</h3>
				<h3>{props.username}</h3>
				<h3>{props.upvotes}</h3>
				<h3>{props.downvotes}</h3>
			</div>
			<button onClick={() => props.whenClickingUpVote(props.id)}>Upvote</button>
			<button onClick={() => props.whenClickingDownVote(props.id)}>Downvote</button>
			<hr />
		</React.Fragment>
	);
}

Post.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	timestamp: PropTypes.object,
	username: PropTypes.string,
	upvotes: PropTypes.number,
	downvotes: PropTypes.number,
	whenClickingUpVote: PropTypes.func,
	whenClickingDownVote: PropTypes.func,
};

export default Post;
