import React, { Component } from 'react'

export default class Entry extends Component {
    
    render() {
        // console.log(this.props);
        return (
            <div className="term">
                <div className="dt">
                    <span className="emoji">{this.props.emojiPic}</span>
                    <span className="emoji">{this.props.emojiName}</span>
                </div>
                <div className="dd">
                    <span>{this.props.emojiMean}</span>
                </div>
            </div>
        )
    }
}
