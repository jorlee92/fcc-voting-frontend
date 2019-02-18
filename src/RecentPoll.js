import React, { Component } from 'react';

class RecentPoll extends Component {
  render() {
    return (
        <div className="col mx-2 pt-5 px-5 bg-secondary mb-3">
          <h2 className="mt-3"><b>{ this.props.name }</b></h2>
          <p className="lead mb-5">Created by { this.props.creatorName } </p>
          <img className="img-fluid d-block" alt="" src={this.props.pictureURL} width=""/>
        </div>
    );
  }
}

export default RecentPoll;
