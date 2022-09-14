
import { useCallback, useId, useState } from "react";
import { useSelector } from "react-redux";
import { useCounter } from "../hook/useCounter";
// import { v4 as uuidv4 } from 'uuid';

function Counter() {
    const [incrementAmount, setIncrementAmount] = useState(2);
    const componentId = useId();
    const { getValue, increment, decrement, incrementByAmount } = useCounter(componentId);

    const value = useSelector(getValue);
    const incrementByAmountOnClick = useCallback((event) => {
        incrementByAmount(incrementAmount);
    }, [incrementByAmount, incrementAmount]);

    return (<div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <input type="number" value={incrementAmount} onChange={(event) => { setIncrementAmount(event.target.value) }} style={{ width: '50px' }} />
            <button onClick={incrementByAmountOnClick}>+ {incrementAmount}</button>
        {value} - {componentId} </div>);
}

export default Counter; 