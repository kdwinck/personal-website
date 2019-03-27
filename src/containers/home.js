import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieModeEnabled: false,
    };
  }

  toggleMovieMode= () => {
    this.setState((state) => {
      return { 
        movieModeEnabled: !this.state.movieModeEnabled,
      };
    });
  }

  render() {
    return (
      <div className="App-header">
        <h1 className="splash-text">WEB DEVELOPER.</h1>
        {
          this.state.movieModeEnabled ? 
            <div>
              <h3 className="blurb-one">"...this seasons must-hire developer!"</h3>
              <h3 className="blurb-two">"my favorite son" - Kyle's Mom</h3>
              <h3 className="blurb-three">"he's pretty cool..." - Josh</h3>
            </div>
          : 
            null
        }
        
        {
          this.state.movieModeEnabled ? 
            <button onClick={this.toggleMovieMode} className="movieButton">Disable Movie Mode</button>
          : 
            <button onClick={this.toggleMovieMode} className="movieButton">Enable Movie Mode</button>
        }
      </div>
    )
  }
}

export default Home;