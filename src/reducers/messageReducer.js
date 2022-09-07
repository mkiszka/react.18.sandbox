const initialState = {
    a: 0
}

export const messageReducer = (state, action) => {  
    // debugger;
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case 'MSG_ACTION_A':
            return { ...state, a: Math.random() }

        default:
            return state;
    }
}