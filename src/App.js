import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Page1 from './components/Page1';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact path="/"
            render={() => <Home />}
          />
          <Route
            path="/1"
            render={() => <Page1 />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
