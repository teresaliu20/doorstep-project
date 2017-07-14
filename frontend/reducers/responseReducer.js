const responseReducer = (state = [], action) => {
    switch (action.type) {
        case 'RESPONSE_TO_REQUEST':
            console.log('reducer to response to request');
            return state;
        default:
            return state;
    }
};
