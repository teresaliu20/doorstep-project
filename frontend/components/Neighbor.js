import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/neighbor.scss';

const Neighbor = ({}) => {
    return (
        <div className="neighbor">
            <span><img src={"https://avatars7.githubusercontent.com/u/19524925?v=4&s=400"} alt="" height="40"/></span>
            <span>Minh To</span>
        </div>
    );
};

export default Neighbor;
