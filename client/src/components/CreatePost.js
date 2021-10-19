import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../features/postSlice';

export default function CreatePost() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // helper to show the create form
  const showFormHandler = () => {
    if (!showForm) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  const dispatch = useDispatch();
  //const postStatus = useSelector((state) => state.status);

  const newPost = {
    title: title,
    body: body,
  };

  // async function to send new post data
  const createNewPost = async (e) => {
    e.preventDefault();
    // dispatch new post
    await dispatch(addNewPost(newPost));

    // reset state
    setTitle('');
    setBody('');
  };
  return (
    <div>
      <button onClick={showFormHandler}>Create New Post</button>
      {/* Show form only if button is clicked */}
      {!showForm ? (
        <div></div>
      ) : (
        <form>
          <div>
            <label htmlFor="title">Enter Title: </label>
            <input
              type="text"
              name="title"
              id="title-input"
              placeholder="Enter a new title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Enter Post: </label>
            <textarea
              cols="40"
              rows="10"
              name="text-input"
              placeholder="Write your blog!"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <button onClick={createNewPost}>Submit</button>
        </form>
      )}
    </div>
  );
}
