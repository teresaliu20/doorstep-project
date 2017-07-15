import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/neighbor.scss';
import { Button } from 'react-bootstrap';

class EachCommunity extends React.Component {
    render() {
        return (
            <div className="">
              <li>
                <span>{this.props.community.name}</span>
              </li>
            </div>
        );
    }
}

EachCommunity.propTypes = ({
    community: PropTypes.object
});

export default EachCommunity;
