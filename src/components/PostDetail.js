import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props) {
	const { post } = props;
	return (
		<React.Fragment>
			<h1> Post details </h1>
			<p>{Object.values(post)[0].message}</p>
		</React.Fragment>
	);
}

PostDetail.propTypes = {
	post: PropTypes.object,
};

export default PostDetail;
