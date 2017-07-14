import React from 'react';
import { Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="https://image.flaticon.com/icons/png/512/343/343647.png"/>
            <h1>Doorstep</h1>
            <div>
              <button className="dashboard-button">Dashboard</button>
              <button className="profile-button">Profile</button>
            </div>
        </div>
    );
};

// Title.propTypes = {
//     name: PropTypes.string,
// };


export default Navbar;
