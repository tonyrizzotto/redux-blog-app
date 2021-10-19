import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from '../features/postSlice';

export default function SinglePost({ match }) {
  const { postId } = match.params;

  // search for the individual post
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <div>
        <h2>No Post Found!</h2>
      </div>
    );
  }
  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back</Link>
    </section>
  );
}
