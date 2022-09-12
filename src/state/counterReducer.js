import { createSlice } from '@reduxjs/toolkit'

//https://stackoverflow.com/questions/62977443/how-to-reuse-the-reducer-logic-in-redux-toolkit-createslice-function
//https://redux-toolkit.js.org/api/createSlice
//https://stackoverflow.com/questions/48393828/duplicating-state-in-redux

const initialState = {}
const initialCounterState = {
    value: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {            
            state[action.payload.componentId].value++;
        },
        decrement(state, action) {            
            state[action.payload.componentId].value++;
        },
        incrementByAmount(state, action) {            
            state[action.payload.componentId].value += action.payload.value;
        },
        initializeState(state, action) {            
            state[action.payload.componentId] = { ...initialCounterState };
        }
    },
})

//selektory
export const getValue = (componentId) => (state) => {    
    return state?.counter?.[componentId]?.value ?? null;
}

export const { increment, decrement, incrementByAmount, initializeState } = counterSlice.actions
export default counterSlice.reducer

