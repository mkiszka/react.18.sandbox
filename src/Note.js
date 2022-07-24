import React from 'react'

function Note({title, description}) {
    return (<div style={
        {display:'flex', 
        flexDirection: 'column', 
        border: '1px solid yellow', 
        borderRadius: '5px',
        textAlign: 'left',
        padding: '5px',
        paddingLeft: '10px',
        paddingRight: '10px'
    }
        
    }><p>{title}</p><p>{description}</p></div>);
}
export default Note;