import React from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

export default function App() {
  return (
    <div>
      <CreatePost />
      <PostList />
    </div>
  );
}
