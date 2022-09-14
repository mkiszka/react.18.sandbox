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
            state[action.payload.counterId].value++;
        },
        decrement(state, action) {            
            state[action.payload.counterId].value--;
        },
        incrementByAmount(state, action) {      
            console.log(action) ;
            state[action.payload.counterId].value += action.payload.value;
        },
        initializeState(state, action) {               
            state[action.payload.counterId] = { ...initialCounterState };
        }
    },
})

//selectors
export const getValue = (counterId) => (state) => {  
    return state?.counter?.[counterId]?.value ?? null;
}
export const isInitialized = (counterId) => (state) => {
    return state?.counter?.[counterId] !== undefined;
}
//exports
export const { increment, decrement, incrementByAmount, initializeState } = counterSlice.actions
export default counterSlice.reducer

