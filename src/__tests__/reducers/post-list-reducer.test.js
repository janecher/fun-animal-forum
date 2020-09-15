import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: "Mysterious Eels",
    username: "kate",
    message: "Scientists still have not observed eels breeding in their natural habitat -- the deepest trenches in the ocean.",
    timestamp: new Date(),
    upvotes: 0,
    downvotes: 0,
    id: 1
  };

  test('Should return default state if there is not action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { title, username, message, timestamp, upvotes, downvotes, id } = postData;
    action = {
      type: 'ADD_POST',
      title: title,
      username: username,
      message: message,
      timestamp: timestamp,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        username: username,
        message: message,
        timestamp: timestamp,
        upvotes: upvotes,
        downvotes: downvotes,
        id: id
      }
    });
  });
  
});