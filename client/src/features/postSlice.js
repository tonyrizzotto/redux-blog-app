import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// a timer to slow down data fetch
const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

// Initial state of our Posts
const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

// selector for all posts
export const selectAllPosts = (state) => state.posts;

// async Thunk to fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchAll', async () => {
  // set a timer
  await delay();
  // this will be called inside of useDispatch, which will set the 'posts' state as the returned data
  const response = await fetch('/api/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return response;
});

// async Thunk to create a new Post
export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (newPost) => {
    await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.body,
      }),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

// Initializes a piece of state called 'posts'
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';

        // add any fetched posts to the state array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // if the action is fulfilled, return state to idle to force a refresh
        state.status = 'idle';
        // clear posts for refresh
        state.posts = [];
      });
  },
});

export default postSlice.reducer;
