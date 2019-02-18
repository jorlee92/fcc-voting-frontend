import React, { Component } from 'react';
import RecentPolls from './RecentPolls';
import Jumbotron from './Jumbotron';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Jumbotron />
          <RecentPolls/>
        </header>
      </div>
    );
  }
}

export default App;
