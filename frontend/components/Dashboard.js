// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Door from './Door';

import styles from '../assets/stylesheets/dashboard.scss';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            communities: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/communities/', {
            method: 'GET',
            headers: {
                "Content-Type": "text/html"
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('json', responseJson);
            this.setState({
                communities: responseJson
            });
            return;
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
    render() {
        console.log("STATE dashboard", this.state);
        return (
            <div>
                <Navbar />
                <div className="dashboard">
                  <h1>Communities</h1>
                  <div className="boxOfDoors">
                    {this.state.communities.map((community, index) =>
                      <Door community={community} key={index}/>
                    )}
                  </div>
                  <div onClick={this.open} className="add-neighbor-button"><img src="/img/plus1x.png"/></div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
