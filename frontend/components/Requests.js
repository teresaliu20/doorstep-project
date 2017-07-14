import React from 'react';
import Request from './Request';
import PropTypes from 'prop-types';

const Requests = ({requests, onRequestClick}) => {
    return (
      <ul>
        {/* {
          requests.map((request, index) => <Request
            request={request}
            key={index}
            onRequestClick={onRequestClick}
          />)
        } */}
      </ul>
    );
};

Requests.propTypes = {
    requests: PropTypes.array,
    onRequestClick: PropTypes.func
};


export default Requests;
