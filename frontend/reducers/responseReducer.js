const responseReducer = (state = [], action) => {
    switch (action.type) {
        case 'RESPONSE_TO_REQUEST':
            console.log('reducer to response to request');
            const newState = state;
            var newResponse = {
                receiver: action.receiver,
                response: action.response
            };
            newState.push(newResponse);
            console.log('new state', newState);
            return newState;
        default:
            return state;
    }
};

export default responseReducer;
