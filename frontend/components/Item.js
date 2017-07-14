import React from 'react';
import PropTypes from 'prop-types';


const Item = ({item}) => {
    return(
      <li>
        <div>
          <img alt={item.name} src={item.url}/>
          image goes here
        </div>
        <div> description, item name, poster name go here</div>
      </li>
    );
};

Item.propTypes = {
    item: PropTypes.object,
};

export default Item;
