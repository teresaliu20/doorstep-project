import React from 'react';
import Navbar from '../components/Navbar';


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
                <div className="main-container">
                    {/* {logo} */}
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
