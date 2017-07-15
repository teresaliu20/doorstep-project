// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fName: '',
            lName: '',
            imgURL: '',
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/profile/' + this.props.match.params.id, {
            method: 'GET',
            headers: {
                "Content-Type": "text/html"
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('json', responseJson);
            this.setState({
                username: responseJson.username,
                fName: responseJson.fName,
                lName: responseJson.lName,
                imgURL: responseJson.imgURL,
            });
            return;
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
    render() {
        console.log("STATE in profile", this.state);
        return (
            <div>
                <Navbar />
                <div className="">
                  <h2>{this.state.username}</h2>
                  <img src={this.state.imgURL} alt={this.state.username}/>
                  <div>
                    <h4>Communities {this.state.fName} is a part of:</h4>
                  </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    match: PropTypes.object
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
)(Profile);
