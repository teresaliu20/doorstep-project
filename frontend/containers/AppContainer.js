// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import CommunityPage from '../components/CommunityPage';
import mainContainer from '../assets/stylesheets/mainContainer.scss';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Profile from '../components/Profile';
import Dashboard from '../components/Dashboard';


class AppContainer extends React.Component {
    render() {
        return (
          <BrowserRouter>
            {/* <h5><Link to="/community/59697d037f49969cba8f2df3">GF Community</Link></h5> */}
            <div>
              <Route exact={true} path="/communities" component={Dashboard}/>
              <Route path="/" component={CommunityPage}/>
              <Route path="/profile" component={Profile}/>

              {/* this route will catch anything without a path */}
              <Route render={() => <h1>404, Sorry fam.</h1>} />
            </div>
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
