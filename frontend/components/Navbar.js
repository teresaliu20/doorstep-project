import React from 'react';
import { Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img src="/img/logo1x.png"/>
                <h1>Doorstep</h1>
                <div>
                  <button className="profile-button">Profile</button>
                  <Link className="dashboard-button" to="/communities">Dashboard</Link>
                </div>
            </div>
        );
    }
}

// Title.propTypes = {
//     name: PropTypes.string,
// };


export default Navbar;