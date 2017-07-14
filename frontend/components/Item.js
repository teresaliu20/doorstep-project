import React from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/stylesheets/item.scss';

const Item = ({item}) => {
    return(
      <li className="item">
        <div>
          <img alt={item.name} src={item.url}/>
        </div>
        <div> description, item name, poster name go here</div>
      </li>
    );
};

Item.propTypes = {
    item: PropTypes.object,
};

export default Item;
