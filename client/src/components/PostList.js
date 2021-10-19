import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { selectAllPosts, fetchPosts } from '../features/postSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function PostList() {
  const dispatch = useDispatch();

  // gets posts from the state object
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  // define a flexible content variable
  let content;

  // if status is 'loading' display 'Loading...'
  if (postStatus === 'loading') {
    content = 'Loading...';
  } else if (postStatus === 'succeeded') {
    // set content to a map of the posts
    content = posts.posts.map((post) => (
      <div key={post._id}>
        <h3>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </h3>
        <p>{post.body}</p>
      </div>
    ));
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  );
}
