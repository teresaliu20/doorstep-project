import React from 'react';
import Request from './Request';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/requests.scss';

const Requests = ({requests, onRequestClick}) => {
    return (
      <div className="requests">
        <ul>
          {/* {
            requests.map((request, index) => <Request
            request={request}
            key={index}
            onRequestClick={onRequestClick}
          />)
        } */}
      </ul>
      </div>
    );
};

Requests.propTypes = {
    requests: PropTypes.array,
    onRequestClick: PropTypes.func
};


export default Requests;
