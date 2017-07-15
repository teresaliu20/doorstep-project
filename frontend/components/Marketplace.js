import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from '../assets/stylesheets/marketplace.scss';
import { Modal, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Marketplace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            imgURL: '',
            items: [],
            community: {}
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleItemNameChange = this.handleItemNameChange.bind(this);
        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        console.log('abc', this.props);
        fetch('http://localhost:3000/api/community/' + '5969d969afbf172e26bce638', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('json marketplace', responseJson);
            this.setState({
                items: responseJson.items
            });
            return;
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    handleItemNameChange(event) {
        this.setState({ itemName: event.target.value });
    }
    handleURLChange(event) {
        this.setState({ imgURL: event.target.value });
    }
    handleSubmit() {
        fetch('http://localhost:3000/api/create-item', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                communityId: this.props.community._id,
                name: this.state.itemName,
                imgURL: this.state.imgURL,
                owner: '5969dbdc734d1d0ff25f947f'
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log('posting item', responseJson);
            this.setState({items: this.state.items.slice().push({name: this.state.itemName, imgURL: this.state.imgURL, owner: '5969dbdc734d1d0ff25f947f'})});
        });
        this.close();
    }
    render() {
        console.log('PROPS', this.props.community);
        return (
          <div className="marketplace">
            <h2>Items</h2>
            <div className="items">
              {
                this.state.items.map((item, index) =>
                <Item item={item}
                  key={index}
                />)
              }
              </div>
              <div onClick={this.open} className="add-item-button">Add item</div>
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Donate an item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <FormGroup
                      controlId="formBasicText">
                      <ControlLabel>Name of item</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.itemName}
                        placeholder="Describe the item"
                        onChange={(event) => this.handleItemNameChange(event)}
                      />
                    </FormGroup>
                    <FormGroup
                      controlId="formBasicText">
                      <ControlLabel>Image URL</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.imgURL}
                        placeholder="Paste image URL here"
                        onChange={(event) => this.handleURLChange(event)}
                      />
                    </FormGroup>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Add item to community</Button>
                </Modal.Footer>
            </Modal>
          </div>
        );
    }
}

Marketplace.propTypes = {
    items: PropTypes.array,
    community: PropTypes.object
};

export default Marketplace;
