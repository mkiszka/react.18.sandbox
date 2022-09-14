import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    initializeState as reducer_InitializeState,
    increment as reducer_increment,
    decrement as reducer_decrement,
    incrementByAmount as reducer_incrementByAmount,
    getValue as reducer_getValue
} from "../state/counterReducer";

export const useCounter = (id) => {
   
    const dispatch = useDispatch();

    //ACTION GENERATORS    
    const initializeState = useCallback(() => dispatch(reducer_InitializeState({ counterId: id })), [dispatch, id]);
    const increment = useCallback(() => { dispatch(reducer_increment({ counterId: id }))}, [dispatch,id]);
    const decrement = useCallback(() => { dispatch(reducer_decrement({ counterId: id }))}, [dispatch,id]);
    const incrementByAmount = useCallback((value) => { dispatch(reducer_incrementByAmount({ counterId: id, value }))}, [dispatch,id]);

    const [isInitialized, setInitialized] = useState(false);
    if( !isInitialized ) {        
        initializeState({ counterId: id });
        setInitialized(true);
    }

    //SELECTORS
    const getValue = reducer_getValue(id);
    
    return {
        increment,
        decrement,
        incrementByAmount,
        getValue
    };
}