import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const container = document.createElement('div');
function PortalFunctionalComponent(props) {

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