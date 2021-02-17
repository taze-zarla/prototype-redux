import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { PostsLists } from './features/posts/PostsList'

import './App.css'
import { AddPostForm } from './features/posts/AddPostForm'
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Counter />
                <AddPostForm />
                <PostsLists />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
