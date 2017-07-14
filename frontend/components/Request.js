import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import styles from '../assets/stylesheets/request.scss';
import users from '../users.js';


class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            response: ''
        };
        this.findUser = this.findUser.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleResponseChange = this.handleResponseChange.bind(this);
    }

    findUser(username) {
        return users.find((user) => username === user.username);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleResponseChange(event) {
        this.setState({ reponse: event.target.value });
    }

    render() {
        return (
        <div className="request">
            <div onClick={this.open}>
                <div>
                    <span><img src={this.findUser(this.props.request.username).imgURL} height="40" alt=""/></span>
                    <div>{this.props.request.text}</div>
                    <div>{this.findUser(this.props.request.username).fName} {this.findUser(this.props.request.username).lName}</div>
                </div>
            </div>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Help a neighbor out</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <FormGroup
                    controlId="formBasicText">
                    <ControlLabel>Response to this request</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.response}
                      placeholder="They need that one thing. Do you have that one thing?"
                      onChange={(event) => this.handleResponseChange(event)}
                    />
                  </FormGroup>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle="primary" onClick={this.props.handleResponse}>Save</Button>
              </Modal.Footer>
          </Modal>
          {/* <Modal
            show={this.open}
            onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Help a neighbor out</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Knock knock!</h5>
              <p>{this.props.request.text}</p>
              <Button onClick={this.props.onRequestClick(this.props.request.name, this.props.request.email)}>
                Fill this request!
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal> */}
        </div>
        );
    }
}

Request.propTypes = {
    request: PropTypes.object,
    handleResponse: PropTypes.func,
};

export default Request;
