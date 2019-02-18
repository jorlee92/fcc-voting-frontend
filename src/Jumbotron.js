import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

class Jumbotron extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
        }
    }

    toggleModal = () => {
        this.setState({ showModal : !this.state.showModal })
    }

    submitPoll = () => {
        //Get the current contents of the two fields
        let pollName = document.querySelector("#polltitle").value;
        let pollImg = document.querySelector("#picurl").value;
        Axios.post('http://localhost:3001/poll', {
            name: pollName,
            pictureURL: pollImg,
        })
        .then( response => { 
            console.log(response) 
            this.toggleModal();
        } )
        .catch(err => console.log(err));
    }

    render() {
    return (
<div className="jumbotron">


    <Modal show={this.state.showModal} onHide={this.toggleModal}>
    <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
<form>
  <div className="form-group">
    <label htmlFor="polltitle">Email address</label>
    <input type="text" className="form-control" id="polltitle" placeholder="Example: Cats vs Dogs"/>
    <label htmlFor="picurl">Picture URL</label>
    <input type="text" className="form-control" id="picurl" placeholder="Example: https://i.imgur.com/qrX7DNj.jpg"/>
  </div>

</form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={this.toggleModal}>
        Close
        </Button>
        <Button variant="primary" onClick={this.submitPoll}>
        Save Changes
        </Button>
    </Modal.Footer>
    </Modal>

  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"></hr>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <button className="btn btn-primary btn-lg" onClick={this.toggleModal} role="button">Learn more</button>
  </p>
</div>
    );
  }
}

export default Jumbotron;
