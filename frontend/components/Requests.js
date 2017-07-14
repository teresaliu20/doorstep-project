import React from 'react';
import Request from './Request';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/requests.scss';
import requests from '../requests.js';

const Requests = ({onRequestClick}) => {
    return (
      <div className="requests">
      <h1>here!</h1>
        <ul>
            {
                requests.map((request, index) =>
                <Request
                    request={request}
                    key={index}
                    // onRequestClick={onRequestClick}
                />)
            }
      </ul>
      </div>
    );
};

Requests.propTypes = {
    onRequestClick: PropTypes.func
};

export default Requests;
