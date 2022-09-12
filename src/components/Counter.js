
import { useCallback, useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValue, increment, initializeState } from "../state/counterReducer";
// import { v4 as uuidv4 } from 'uuid';

function Counter() {

    const componentId = useId();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeState({ componentId }));
    }, [dispatch, componentId]);

    const value = useSelector(getValue(componentId));
    
    const handleClick = useCallback(
        () => {
            dispatch(increment({ componentId }));
        },
        [dispatch, componentId],
    )    

    return (<div><button onClick={handleClick}>click me</button> {value} - {componentId} </div>);
}

export default Counter;