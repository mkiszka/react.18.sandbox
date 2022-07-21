import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
function createElement(element) {
     return document.createElement(element,{ id: 'worek', title: Math.random() * 1000})
}
function PortalFunctionalComponent(props) {
    const a = props.refresh;
    const [container] = useState(() => {return createElement()});
    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [container])

    return (
        ReactDOM.createPortal(props.children, container)
    )
}

export default PortalFunctionalComponent;