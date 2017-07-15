import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
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
            <Card style={{width: '350px'}}>
              {/* <CardTitle
                title={item.name}
              /> */}
              <CardMedia
                aspectRatio="wide"
                // image={item.url}
                >
                  <img src={this.props.items.imgURL} alt={this.props.items.name}/>
              </CardMedia>
              <CardTitle
                  title={this.props.items.name}
                  subtitle={"Posted by " + this.props.items.owner.username}/>
              {/* <CardActions theme={theme}>
                <Button label="Action 1" />
                <Button label="Action 2" />
              </CardActions> */}
            </Card>
              <Modal
                show={this.state.showModal}
                onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Knock knock!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Want to borrow {this.props.items.name} from {this.props.items.owner.username}?</h5>
                  <Button onClick={this.props.onItemClick}>
                    Send them a message!
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
    items: PropTypes.object,
    onItemClick: PropTypes.func
};

export default Item;
