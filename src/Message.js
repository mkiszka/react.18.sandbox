import { configureStore } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
    
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_A':            
            return { ...state, a: Math.random()}
    
        default:
            break;
    }
}

export default class Message extends React.Component {
    constructor(props) {       
        super(props);
        this.state = {
            force: 0
        }
        this.forceUpdate = this.forceUpdate.bind(this);
        this.changeState = this.changeState.bind(this);

        this.store = configureStore({ reducer });
        this.unsubscribe = this.store.subscribe(this.forceUpdate);

    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    forceUpdate() {
        this.setState((prevState) => { return {force: prevState.force + 1} });
    }
    changeState() {
        this.store.dispatch( { type: 'ACTION_A' } );
    }
    render() {
        console.log('render');
        return <><div>Takie małe info.</div><button onClick={this.changeState}>CLICK</button></>
    }
}