// Action Creators

// import * as types from './types';

const requestClick = (name, email) => {
    return {
        type: 'REQUEST_CLICK',
        name,
        email,
    };
};

export { requestClick };
