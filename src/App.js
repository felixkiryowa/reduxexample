import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Posts from './Components/Posts'
import PostsForm from './Components/PostsForm'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
              <PostsForm/>
              <hr></hr>
              <Posts/>
          </div>
      </Provider>
    );
  }
}

export default App;
