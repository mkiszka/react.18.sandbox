import React from 'react'

function Note({title, description, onDelete}) {
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
        
    }><p>{title}</p><p>{description}</p><button onClick={onDelete}>usuń</button></div>);
}
export default Note;