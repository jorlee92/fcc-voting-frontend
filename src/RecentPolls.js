import React, { Component } from 'react';
import RecentPoll from './RecentPoll';
import Axios from 'axios';
class RecentPolls extends Component {
  constructor(props){
    super(props);
    this.state = { polls : []};
  }
  componentDidMount() {
    Axios.get('http://localhost:3000/poll/')
    .then(results => {
      this.setState({ polls: results.data })
    });
  }
  render() {
    return (
    <div className="text-center">
        <div className="container-fluid">
        <div className="row px-2">
        { this.state.polls.map((poll,idx) => {
          return <RecentPoll name={poll.name} key={idx} 
          creatorName={poll.creatorName} 
          pictureURL={ poll.pictureURL }/>
        }) }
        </div>
        </div>
      </div>
        );
  }
}

export default RecentPolls;
