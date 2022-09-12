import React from "react";
import { useDispatch } from 'react-redux';

function AnotherComponent() {
    const dispatch = useDispatch();
    const changeState = () => {
        dispatch({ type: 'ACR_ACTION_A' })
    }
    console.log('AnotherComponent');
    return <><div>Another Component Inne info AC.</div><button onClick={changeState}>CLICK</button></>
}
export default AnotherComponent;