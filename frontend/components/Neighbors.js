import React from 'react';
import PropTypes from 'prop-types';
import Neighbor from './Neighbor';
// import users from '../users';
import styles from '../assets/stylesheets/neighbors.scss';

class Neighbors extends React.Component {
    render() {
        return (
            <div className="neighbors">
             {
                 this.props.users.map(user =>
                     <Neighbor user={user}/>
                 )
             }
            </div>
        );
    }
}

Neighbors.propTypes = {
    users: PropTypes.array,
};


export default Neighbors;
