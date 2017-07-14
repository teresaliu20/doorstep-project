import React from 'react';
import PropTypes from 'prop-types';
import Neighbor from './Neighbor';
import users from '../users';

const Neighbors = ({}) => {
    return (
        <div className="neighbors">
         {
             users.map(user =>
                 <Neighbor user={user}/>
             )
         }
        </div>
    );
};

// Title.propTypes = {
//     name: PropTypes.string,
// };


export default Neighbors;
