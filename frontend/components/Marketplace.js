import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from '../assets/stylesheets/marketplace.scss';
// import items from '../items';

class Marketplace extends React.Component {
    render() {
        console.log('ITEM', this.props.items);
        return (
          <div className="marketplace">
            <h2>Items</h2>
            <div className="items">
              {
                this.props.items.map((item, index) =>
                <Item item={item}
                  key={index}
                  // onItemClick={onItemClick}
                />)
              }
              </div>
              <div className="add-item-button">Add item</div>
          </div>
        );
    }
}

Marketplace.propTypes = {
    items: PropTypes.array,
};

export default Marketplace;
