import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
} from 'react-bootstrap';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
        <div>
          <li onClick={this.props.onRequestClick}>
            <h4>Request from: {this.props.request.name}</h4>
            <p>{this.props.request.text}</p>
          </li>
          <Modal
            show={this.open}
            onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Request from {this.props.request.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Knock knock!</h5>
              <p>{this.props.request.text}</p>
              <Button>Fill this request!</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        );
    }
}

Request.propTypes = {
    request: PropTypes.object,
    onRequestClick: PropTypes.func,
};


export default Request;
