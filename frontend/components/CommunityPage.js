import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Neighbors from '../components/Neighbors';
import Marketplace from '../components/Marketplace';
import Requests from '../components/Requests';
import mainContainer from '../assets/stylesheets/mainContainer.scss';


class CommunityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            users: [],
            items: [],
            requests: [],
            community: null
        };
    }
    componentDidMount() {
        console.log('match', this.props.match);
        fetch('http://localhost:3000/api/community/' + this.props.match.params.communityId, {
            method: 'GET',
            headers: {
                "Content-Type": "text/html"
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('json', responseJson);
            this.setState({
                name: responseJson.name,
                description: responseJson.description,
                users: responseJson.users,
                items: responseJson.items,
                requests: responseJson.requests,
                community: responseJson
            });
            return;
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
    render() {
        console.log("STATE community page", this.state);
        return (
            <div>
                <Navbar />
                <div className="main-container">
                    <Neighbors users={this.state.users} community={this.state.community}/>
                    <Marketplace items={this.state.items}/>
                    <Requests requests={this.state.requests} onResponseClick={this.props.onResponseClick}/>
                </div>
            </div>
        );
    }
}

CommunityPage.propTypes = {
    responses: PropTypes.array,
    onResponseClick: PropTypes.func,
    match: PropTypes.shape
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
)(CommunityPage);
