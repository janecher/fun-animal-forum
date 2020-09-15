import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h3>{props.message}</h3>
      <h3>{props.timestamp}</h3>
      <h3>{props.username}</h3>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string, 
  timestamp: PropTypes.string,

};