import React from "react";
import PropTypes from "prop-types";

function Post(props) {

  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h3>{props.message}</h3>
      <h3>{props.timestamp}</h3>
      <h3>{props.username}</h3>
      <button onClick={() => props.whenClickingUpVote(props.id)}>Upvote</button>
      <button onClick={() => props.whenClickingDownVote(props.id)}>Downvote</button>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.string,
  username: PropTypes.string,
  whenClickingUpVote: PropTypes.func,
  whenClickingDownVote: PropTypes.func
};

export default Post;

  //const { post, onClickingUpVote, onClickingDownVote } = props;

  //   return (
  //     <React.Fragment>
  //       <h3>{post.title}</h3>
  //       <h3>{post.message}</h3>
  //       <h3>{post.timestamp}</h3>
  //       <h3>{post.username}</h3>
  //       <button onClick={() => onClickingUpVote(post.id)}>Upvote</button>
  //       <button onClick={() => onClickingDownVote(post.id)}>Downvote</button>
  //       <hr />
  //     </React.Fragment>
  //   );
  // }