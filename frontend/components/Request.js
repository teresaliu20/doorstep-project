import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import styles from '../assets/stylesheets/request.scss';


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
        <div className="request">
          <li onClick={this.open}>
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
              <Button onClick={this.props.onRequestClick(this.props.request.name, this.props.request.email)}>
                Fill this request!
              </Button>
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
