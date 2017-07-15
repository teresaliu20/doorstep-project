import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
// import { Button } from 'react-toolbox/lib/button';


import styles from '../assets/stylesheets/item.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return(
          <li className="item" onClick={this.open}>
            <div className="item-div">
              <div className="img-wrapper"><img src={this.props.item.imgURL} alt={this.props.item.name}/></div>
              <div className="item-info">
                <h3>{this.props.item.name}</h3>
                <h4>{"Giver: " + this.props.item.owner.fName + " " + this.props.item.owner.lName}</h4>
              </div>
            </div>
              <Modal
                show={this.state.showModal}
                onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Knock knock!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Want to take {this.props.item.name} from {this.props.item.owner.fName}?</h5>
                  <Button onClick={this.props.onItemClick}>
                    Yes, please!
                  </Button>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
          </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object,
    onItemClick: PropTypes.func
};

export default Item;
