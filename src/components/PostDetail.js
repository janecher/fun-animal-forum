import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function PostDetail(props) {
	const { post, onClickingUpVote, onClickingDownVote, upvotes, downvotes } = props;
	// render() {
	// 	const { post, onClickingUpVote, onClickingDownVote } = props;
	// 	return (
	// 		<React.Fragment>
	// 			<h1> Post details </h1>
	// 			<p>{Object.values(post)[0].message}</p>
	// 			<p>Upvotes: {Object.values(post)[0].upvotes}</p>
	// 			<p>Downvotes: {Object.values(post)[0].downvotes}</p>
	// 			<button onClick={() => onClickingUpVote(Object.values(post)[0].id)}>Upvote</button>
	// 			<button onClick={() => onClickingDownVote(Object.values(post)[0].id)}>Downvote</button>
	// 			{console.log(Object.values(post))}
	// 			{console.log(Object.values(props.post)[0].id)}
	// 		</React.Fragment>
	// 	);
	// }
	return (
		<React.Fragment>
			<h1> Post details </h1>
			<p>{Object.values(post)[0].message}</p>
			<p>Upvotes: {upvotes}</p>
			<p>Downvotes: {downvotes}</p>
			<button onClick={() => onClickingUpVote(Object.values(post)[0].id)}>Upvote</button>
			<button onClick={() => onClickingDownVote(Object.values(post)[0].id)}>Downvote</button>
			{console.log(Object.values(post))}
			{console.log(Object.values(props.post)[0].id)}
		</React.Fragment>
	);
}

const mapStateToProps = (state, props) => {
	return {
		// masterPostList: { ...state.masterPostList },
		// selectedPost: state.selectedPost[Object.values(props.post)[0].id]
		downvotes: state.masterPostList[Object.values(props.post)[0].id].downvotes,
		upvotes: state.masterPostList[Object.values(props.post)[0].id].upvotes
	}
}

//PostDetail = connect(mapStateToProps)(PostDetail)

PostDetail.propTypes = {
	post: PropTypes.object,
	onClickingDownVote: PropTypes.func,
	onClickingUpVote: PropTypes.func
};

export default connect(mapStateToProps)(PostDetail);

//what is the difference between class component and functional component and this connect method

// function Details(props) {
//   const { book, quantity } = props;

//   return (
//     <React.Fragment>
//       <p>{book.name}</p>
//       <p>{book.price}</p>
//       <p>{book.author}</p>
//       <p>{quantity} books remaining</p>
//     </React.Fragment>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     quantity: state.masterBookList[book.id].quantity
//   }
// }

// Details = connect(mapStateToProps)(Details)
// export default Details