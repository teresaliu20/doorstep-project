import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/neighbor.scss';
import { Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

class Neighbor extends React.Component {
    render() {
        return (
            <a button className="neighbor" href={'profile/' + this.props.user._id}>
                <span><img src={this.props.user.imgURL} alt="" height="40"/></span>
                <span>{this.props.user.fName} {this.props.user.lName}</span>
            </a>
        );
    }
}

Neighbor.propTypes = ({
    user: PropTypes.object
});

export default Neighbor;
