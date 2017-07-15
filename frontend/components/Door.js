import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/neighbor.scss';
import { Link } from 'react-router-dom';

class Door extends React.Component {
    render() {
        return (
            <div className="">
              <li>
                <Link to={"/community/" + this.props.community._id}>{this.props.community.name}</Link>
              </li>
            </div>
        );
    }
}

Door.propTypes = ({
    community: PropTypes.object
});

export default Door;
