import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Neighbors from '../components/Neighbors';
import Marketplace from '../components/Marketplace';
import Requests from '../components/Requests';
import mainContainer from '../assets/stylesheets/mainContainer.scss';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            users: [],
            items: [],
            requests: []
        };
    }
    componentDidMount() {
        fetch('localhost:3000/api/community/' + '59697d037f49969cba8f2df3', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            console.log(response);
            response.json();
        })
        .then((responseJson) => {
            console.log('json', responseJson);
            this.setState({
                name: responseJson.name,
                description: responseJson.description,
                users: responseJson.users,
                items: responseJson.items,
                requests: responseJson.requests
            });
            return;
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="main-container">
                    <Neighbors users={this.state.users}/>
                    <Marketplace items={this.state.items}/>
                    <Requests requests={this.state.requests} onResponseClick={this.props.onResponseClick}/>
                </div>
            </div>
        );
    }
}

AppContainer.propTypes = {
    responses: PropTypes.array,
    onResponseClick: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        responses: state.responses
    };
};

const mapDispatchToProps = (dispatch) => {
  //  someDispProp: /* some function that dispatches an action */
    return {
        onResponseClick: (receiver, response) => dispatch({type: 'RESPONSE_TO_REQUEST', receiver, response})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
