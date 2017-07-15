import React from 'react';
import Request from './Request';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/requests.scss';
// import requests from '../requests.js';

class Requests extends React.Component {
    render() {
        console.log(this.props.requests);
        return (
          <div className="requests">
            <h2>Requests</h2>
            <a button href="#" className="add-request-button">Make a request</a>
            <div>
                {
                    this.props.requests.map((request, index) =>
                    <Request
                        request={request}
                        key={index}
                        handleResponse={this.props.onResponseClick}
                    />)
                }
            </div>
          </div>
        );
    }
}

Requests.propTypes = {
    requests: PropTypes.array,
    onResponseClick: PropTypes.func
};

export default Requests;
