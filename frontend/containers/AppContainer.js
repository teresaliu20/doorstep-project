// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import CommunityPage from '../components/CommunityPage';
import mainContainer from '../assets/stylesheets/mainContainer.scss';
import { BrowserRouter } from 'react-router-dom';

class AppContainer extends React.Component {
    render() {
        console.log("STATE NEW", this.state);
        return (
            <BrowserRouter>
                <CommunityPage className="main-container"/>
            </BrowserRouter>
        );
    }
}

AppContainer.propTypes = {
    // responses: PropTypes.array,
    // onResponseClick: PropTypes.func
};

const mapStateToProps = (/* state */) => {
    return {
        // responses: state.responses
    };
};

const mapDispatchToProps = (/* dispatch */) => {
  //  someDispProp: /* some function that dispatches an action */
    return {
        // onResponseClick: (receiver, response) => dispatch({type: 'RESPONSE_TO_REQUEST', receiver, response})
    };
};

export default AppContainer;
