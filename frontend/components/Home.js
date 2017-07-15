import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../assets/stylesheets/home.scss';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="home">
                    {/* {logo} */}
                    <h2>Welcome to Doorstep!</h2>
                    <h4><Link className="communities-link" to="/communities">Click here to see all communities!</Link></h4>
                </div>
            </div>
        );
    }
}

// Home.propTypes = {
//     responses: PropTypes.array,
//     onResponseClick: PropTypes.func
// };
//
// const mapStateToProps = (state) => {
//     return {
//         responses: state.responses
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   //  someDispProp: /* some function that dispatches an action */
//     return {
//         onResponseClick: (receiver, response) => dispatch({type: 'RESPONSE_TO_REQUEST', receiver, response})
//     };
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Home);

export default Home;
