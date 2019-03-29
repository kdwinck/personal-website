import React, { Component } from 'react';
import { quotes } from './constants';
import { shuffle } from './helpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieModeEnabled: false,
      quotes: [],
    };
  }

  componentDidMount() {
    this.selectRandomQuotes();
  }

  toggleMovieMode = () => {
    this.selectRandomQuotes();
    this.setState((state) => {
      return { 
        movieModeEnabled: !this.state.movieModeEnabled,
      };
    });
  }

  selectRandomQuotes = () => {
    let randomQuotes = shuffle(quotes);
    
    this.setState((state) => {
      return {
        quotes: randomQuotes,
      }
    });
  }

  render() {

    return (
      <div className="App-header">
        <h1 className="splash-text">WEB DEVELOPER.</h1>
        {
          this.state.movieModeEnabled ? 
            <div>
              <h3 className="blurb-one">{this.state.quotes[0]}</h3>
              <h3 className="blurb-two">{this.state.quotes[1]}</h3>
              <h3 className="blurb-three">{this.state.quotes[2]}</h3>
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