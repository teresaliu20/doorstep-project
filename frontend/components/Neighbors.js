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
        this.close();
    }

    componentDidMount() {
        fetch('')
    }
    render() {
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
                              value={this.state.response}
                              placeholder="Who is your neighbor?"
                              onChange={(event) => this.handleResponseChange(event)}
                            />
                          </FormGroup>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Send them a response</Button>
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
