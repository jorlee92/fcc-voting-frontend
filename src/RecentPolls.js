import React, { Component } from 'react';
import RecentPoll from './RecentPoll';
import Axios from 'axios';
class RecentPolls extends Component {
  constructor(props){
    super(props);
    this.state = { polls : []};
  }
  componentDidMount() {
    Axios.get('http://localhost:3001/poll/')
    .then(results => {
      this.setState({ polls: results.data })
    });
  }
  render() {
    return (
    <div className="text-center">
        <div className="container-fluid">
        <div className="row px-2">
        { this.state.polls.map(poll => {
          return <RecentPoll name={poll.name} creatorName={poll.creatorName} pictureURL={ poll.pictureURL }/>
        }) }
          <RecentPoll/>
          <RecentPoll/>
          <RecentPoll/>
        </div>
        </div>
      </div>
        );
  }
}

export default RecentPolls;
