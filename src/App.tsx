import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Counter } from './features/counter/Counter'
import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import { SearchForm } from './features/colors/SearchForm'
import { ColorsList } from './features/colors/ColorsList'

import './App.css'

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
                <PostsList />
                <SearchForm />
                <ColorsList />
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
