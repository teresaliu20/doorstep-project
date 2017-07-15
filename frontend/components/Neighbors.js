import React from 'react';
import PropTypes from 'prop-types';
import Neighbor from './Neighbor';
// import users from '../users';
import styles from '../assets/stylesheets/neighbors.scss';
import { BrowserRouter, Link } from 'react-router-dom';

class Neighbors extends React.Component {
    render() {
        return (
            <div className="neighbors">
                <div className="side-bar"></div>
                <div className="neighbors-bar">
                    <h2>Neighbors</h2>
                    <BrowserRouter>
                        <Link to="#" className="add-neighbor-button">Add a friend</Link>
                    </BrowserRouter>
                    <div>
                 {
                     this.props.users.map(user =>
                         <Neighbor user={user}/>
                     )
                 }
                    </div>
                </div>
            </div>
        );
    }
}

Neighbors.propTypes = {
    users: PropTypes.array,
};


export default Neighbors;
