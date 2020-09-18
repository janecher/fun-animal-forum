import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function PostDetail(props) {
	const { post, onClickingUpVote, onClickingDownVote, upvotes, downvotes } = props;

	return (
		<React.Fragment>
			<h1> Post details </h1>
			<p>{Object.values(post)[0].message}</p>
			<p>Upvotes: {upvotes}</p>
			<p>Downvotes: {downvotes}</p>
			<button onClick={() => onClickingUpVote(Object.values(post)[0].id)}>Upvote</button>
			<button onClick={() => onClickingDownVote(Object.values(post)[0].id)}>Downvote</button>
		</React.Fragment>
	);
}

const mapStateToProps = (state, props) => {
	return {
		downvotes: state.masterPostList[Object.values(props.post)[0].id].downvotes,
		upvotes: state.masterPostList[Object.values(props.post)[0].id].upvotes
	}
}

PostDetail.propTypes = {
	post: PropTypes.object,
	onClickingDownVote: PropTypes.func,
	onClickingUpVote: PropTypes.func
};

export default connect(mapStateToProps)(PostDetail);
