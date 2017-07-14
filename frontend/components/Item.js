import React from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/stylesheets/item.scss';

const Item = ({item}) => {
    return(
      <li className="item">
        <div>
          <img alt={item.name} src={item.url}/>
        </div>
        <div>
          <h5>{item.name}</h5>
          <p>From {item.username}</p>
        </div>
      </li>
    );
};

Item.propTypes = {
    item: PropTypes.object,
};

export default Item;
