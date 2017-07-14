import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Neighbors from '../components/Neighbors';
import Marketplace from '../components/Marketplace';
import Requests from '../components/Requests';
import mainContainer from '../assets/stylesheets/mainContainer.scss';

const AppContainer = ({ name }) => {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Neighbors />
                <Marketplace />
                <Requests />
            </div>
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
