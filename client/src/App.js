import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <CreatePost />
                <PostList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePost} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </Router>
  );
}
