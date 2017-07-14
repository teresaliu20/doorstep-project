import React from 'react';
// import PropTypes from 'prop-types';
import Item from './Item';

import styles from '../assets/stylesheets/marketplace.scss';
import items from '../items';

const Marketplace = () => {
    return (
      <div className="marketplace-div">
        <h3>Items</h3>
        <ul>
          {
            items.map((item, index) =>
            <Item item={item}
              key={index}
            />)
          }
        </ul>
      </div>
    );
};

// Marketplace.propTypes = {
//     items: PropTypes.array,
// };

export default Marketplace;
