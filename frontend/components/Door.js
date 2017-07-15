import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/door.scss';
import { Link } from 'react-router-dom';

class Door extends React.Component {
    render() {
        return (
            <div className="door">
              <div className="doorImg">
                <Link to={"/community/" + this.props.community._id} className="doorName">{this.props.community.name}</Link>
              </div>
            </div>
        );
    }
}

Door.propTypes = ({
    community: PropTypes.object
});

export default Door;
