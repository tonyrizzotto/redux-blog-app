import React, { useState } from 'react';

export default function CreatePost() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    if (!showForm) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
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
            />
          </div>
          <div>
            <label>Enter Post: </label>
            <textarea
              cols="40"
              rows="10"
              name="text-input"
              placeholder="Write your blog!"
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
