

const initialState = {
    a: 0
}

export const anotherComponentReducer = (state, action) => {  
    // debugger;
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case 'ACR_ACTION_A':
            return { ...state, a: Math.random() }

        default:
            return state;
    }
}