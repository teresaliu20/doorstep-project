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
            <h3>Items</h3>
            <ul>
              {
                this.props.items.map((item, index) =>
                <Item item={item}
                  key={index}
                  // onItemClick={onItemClick}
                />)
              }
            </ul>
          </div>
        );
    }
}

Marketplace.propTypes = {
    items: PropTypes.array,
};

export default Marketplace;
