import React from 'react';
import { Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Doorstep</h1>
            <Button bsStyle="primary">Dashboard</Button>
            <Button>Profile</Button>
        </div>
    );
};

// Title.propTypes = {
//     name: PropTypes.string,
// };


export default Navbar;
