import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor'

        }

    }

    changeEvent() {
        this.setState({
            message: 'thank you for subsricbing'
        })
    }
    render = () => {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeEvent()}>Subscribe</button>


            </div>
        )


    }

}

export default Message;