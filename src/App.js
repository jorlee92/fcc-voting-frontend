import React, { Component } from 'react';
import RecentPolls from './RecentPolls';
import Jumbotron from './Jumbotron';
import SinglePoll from './SinglePoll'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        sdfadfaS
        </header>
        <Jumbotron />
          <RecentPolls/> */}
          <SinglePoll />
      </div>
    );
  }
}

export default App;
