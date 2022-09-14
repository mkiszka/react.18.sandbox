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
    const [isInitialized, setInitialized] = useState(false);
    const dispatch = useDispatch();
        
    //ACTION GENERATORS    
    const initializeState = useCallback(() => dispatch(reducer_InitializeState({ counterId: id })), [dispatch, id]);
    const increment = useCallback(() => { dispatch(reducer_increment({ counterId: id }))}, [dispatch,id]);
    const decrement = useCallback(() => { dispatch(reducer_decrement({ counterId: id }))}, [dispatch,id]);
    const incrementByAmount = useCallback((value) => { dispatch(reducer_incrementByAmount({ counterId: id, value }))}, [dispatch,id]);

    //SELECTORS
    const getValue = reducer_getValue(id);

    //Initialize component state
    //konsultacja ogólna - inicjalizeState odbywa się dopiero po wygenerowaniu komponentu - więc komponent najpierw generuje się bez value
    //jak ten efeket zniwelować ?
    useEffect(() => {
        initializeState({ counterId: id });
        setInitialized(true)
    }, [initializeState, id]);

    return {
        increment,
        decrement,
        incrementByAmount,
        getValue
    };
}