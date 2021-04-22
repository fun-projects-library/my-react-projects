import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h4>This message is coming from message ID {this.props.match.params.abc}</h4>
            </div>
        )
    }
}
