import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/neighbor.scss';
import { Button } from 'react-bootstrap';

class Neighbor extends React.Component {
    render() {
        return (
            <div className="neighbor">
                <span><img src={this.props.user.imgURL} alt="" height="40"/></span>
                <span>{this.props.user.fName} {this.props.user.lName}</span>
            </div>
        );
    }
}

Neighbor.propTypes = ({
    user: PropTypes.object
});

export default Neighbor;
