import React from "react";
import { ReactReduxContext,connect } from 'react-redux';


class Message extends React.Component {
    constructor(props) {       
        super(props);
        this.state = {
            force: 0
        }
        this.forceUpdate = this.forceUpdate.bind(this);
        this.changeState = this.changeState.bind(this);        

    }
    componentDidMount() { 
        this.unsubscribe = this.context.store.subscribe(this.forceUpdate);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    forceUpdate() {
        this.setState((prevState) => { return {force: prevState.force + 1} });
    }
    changeState() {
        this.context.store.dispatch( { type: 'ACTION_A' } );
    }
    render() {
        console.log('Message');
        return <><div>Message component: Takie małe info.</div><button onClick={this.changeState}>CLICK</button></>
    }
}
Message.contextType = ReactReduxContext;

const ConnectedMessage = connect()(Message);
export default ConnectedMessage;