import { combineReducers } from 'redux';
import responseReducer from './responseReducer';

const rootReducer = combineReducers({
    responses: responseReducer
});

export default rootReducer;
