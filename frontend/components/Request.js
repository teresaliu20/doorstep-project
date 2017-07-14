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
        this.handleResponseChange = this.handleResponseChange.bind(this);
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
                {
                    () => {
                        const foundUser = users.find((user) => this.props.request.username === user.username);
                        console.log(foundUser);
                        return (
                            <div>
                                <span><img src={foundUser.imgURL} alt=""/></span>
                                <div>{this.props.request.text}</div>
                                <div>{foundUser.fName} {foundUser.lName}</div>
                            </div>
                        );
                    }
                }
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
            <Button bsStyle="primary" onClick={() => this.handleOnSubmit()}>Save</Button>
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
    onRequestClick: PropTypes.func,
};


export default Request;
