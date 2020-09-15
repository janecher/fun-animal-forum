import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({ title: event.target.title.value, message: event.target.message.value, username: event.target.username.value, timestamp: new Date(), id: v4() });
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input type='text'
          name='title'
          placeholder='title of post' />
        <textarea name='message'
          placeholder='write your post...' />
        <input type='text'
          name='username'
          placeholder='what do you want to be called?' />
        <button type='submit'>Submit Post</button>
      </form>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;