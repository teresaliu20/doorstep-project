import React from 'react';
import Request from './Request';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/requests.scss';
import requests from '../requests.js';

const Requests = ({onResponseClick}) => {
    console.log(requests);
    return (
      <div className="requests">
            {
                requests.map((request, index) =>
                <Request
                    request={request}
                    key={index}
                    handleResponse={onResponseClick}
                />)
            }
      </div>
    );
};

Requests.propTypes = {
    onResponseClick: PropTypes.func
};

export default Requests;
