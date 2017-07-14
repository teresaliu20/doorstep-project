import React from 'react';
// import PropTypes from 'prop-types';
import Item from './Item';
import styles from '../assets/stylesheets/marketplace.scss';

const Marketplace = ({items}) => {
    return (
      <div className="marketplace">
        <h3>Items</h3>
        <ul>
          {/* {
            items.map((item, index) =>
            <Item item={item}
              key={index}
            />)
          } */}
        </ul>
      </div>
    );
};

// Title.propTypes = {
//     name: PropTypes.string,
// };

export default Marketplace;
