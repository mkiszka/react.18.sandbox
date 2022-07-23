import { useState } from "react";

function useSomeCustomHook(initialValue) {

    const [importantParam, setImportantParam] = useState(initialValue);

    function handleClick(event) {
        console.log('handleClick')
        setImportantParam(Math.random() * 100);
    }
    return [importantParam, setImportantParam, handleClick]
}


function SomeComponent(params) {
    const [w,setW, onClick]    = useSomeCustomHook(5)
    console.log('Render')
    function handleOtherClick (event) {
        setW(Math.random() * 1000);
    }
    return (<>
        <div style={{ position:'fixed', top: 0, width: '100%', backgroundColor: "yellow" }}>Test {w}<button style={{marginLeft: '10px'}}onClick={onClick} >Refresh in custom hook </button> <button style={{marginLeft: '10px'}}onClick={handleOtherClick} >Refresh local</button></div>
    </>)
}

export default SomeComponent;