import React from 'react';
import PropTypes from 'prop-types';
import Neighbor from './Neighbor';
// import users from '../users';
import styles from '../assets/stylesheets/neighbors.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Neighbors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNeighborUsername: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleResponseChange = this.handleResponseChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleResponseChange(event) {
        this.setState({ newNeighborUsername: event.target.value });
    }

    handleSubmit() {
        fetch('http://localhost:3000/api/add-user/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                communityId: this.props.community._id
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log('json', responseJson);
        })
        .catch(err => console.log('error', err));
        this.close();
    }

    render() {
        console.log('neighbors', this.props.users);
        return (
            <div className="neighbors">
                <div className="side-bar"></div>
                <div className="neighbors-bar">
                    <h2>Neighbors</h2>
                    <Button onClick={this.open} className="add-neighbor-button">Add a friend</Button>
                    <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add a neighbor</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <FormGroup
                            controlId="formBasicText">
                            <ControlLabel>Enter neighbor's username</ControlLabel>
                            <FormControl
                              type="text"
                              value={this.state.newNeighborUsername}
                              placeholder="Who is your neighbor?"
                              onChange={(event) => this.handleResponseChange(event)}
                            />
                          </FormGroup>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Add to community</Button>
                      </Modal.Footer>
                  </Modal>
                    <div>
                 {
                     this.props.users.map(user =>
                         <Neighbor user={user}/>
                     )
                 }
                    </div>
                </div>
            </div>
        );
    }
}

Neighbors.propTypes = {
    users: PropTypes.array,
    community: PropTypes.shape
};


export default Neighbors;
