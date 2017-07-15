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
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({ response: event.target.value });
    }

    handleSubmit() {
        this.close();
        this.props.handleResponse(this.props.request.owner, this.state.response);
    }

    render() {
        console.log('request', this.props.request);
        return (
        <div className="request">
            <div onClick={this.open}>
                <div>
                    <span><img src={this.props.request.owner.imgURL} height="40" alt=""/></span>
                    <div>{this.props.request.text}</div>
                    <div>{this.props.request.owner.fName} {this.props.request.owner.lName}</div>
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
                <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Send them a response</Button>
              </Modal.Footer>
          </Modal>
        </div>
        );
    }
}

Request.propTypes = {
    request: PropTypes.object,
    handleResponse: PropTypes.func,
};

export default Request;
