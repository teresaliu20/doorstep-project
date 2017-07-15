import React from 'react';
import PropTypes from 'prop-types';
import Neighbor from './Neighbor';
// import users from '../users';
import styles from '../assets/stylesheets/neighbors.scss';

class Neighbors extends React.Component {
    render() {
        return (
            <div className="neighbors">
                <h2>Neighbors</h2>
                <div className="add-neighbor-button">Add a neighbor</div>
                <div>
             {
                 this.props.users.map(user =>
                     <Neighbor user={user}/>
                 )
             }
                <div className="side-bar"></div>
                <div className="neighbors-bar">
                    <h2>Neighbors</h2>
                    <div className="add-neighbor-button">Add a friend</div>
                    <div>
                 {
                     this.props.users.map(user =>
                         <Neighbor user={user}/>
                     )
                 }
                    </div>
>>>>>>> 2f9a8f4372bf8548a8ea107b7dbb754912d534f3
                </div>
            </div>
        );
    }
}

Neighbors.propTypes = {
    users: PropTypes.array,
};


export default Neighbors;
