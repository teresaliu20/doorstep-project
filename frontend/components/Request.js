import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const Request = ({request, onRequestClick}) => {
    return (
        <li onClick={onRequestClick}>
            <h4>Request from: {request.name}</h4>
            <p>{request.text}</p>
        </li>
    );
};

Request.propTypes = {
    request: PropTypes.object,
    onRequestClick: PropTypes.func,
};


export default Request;
