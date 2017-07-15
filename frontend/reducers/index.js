import { combineReducers } from 'redux';
import { routeReducer as routing} from 'react-router-dom';
import responseReducer from './responseReducer';

const rootReducer = combineReducers({
    responses: responseReducer,
    routing
});

export default rootReducer;
