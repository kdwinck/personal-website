import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom';

import About from './containers/about';
import Home from './containers/homePage/home';
import Contact from './containers/contact';
import Projects from './containers/projects';
import Resume from './containers/resume/resume';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
