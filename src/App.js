import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom';

import About from './containers/about';
import Home from './containers/home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <navbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Resume</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </navbar>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/topics" component={Resume} /> */}
          {/* <Route exact path="/" component={Projects} /> */}
          {/* <Route path="/about" component={Contact} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
