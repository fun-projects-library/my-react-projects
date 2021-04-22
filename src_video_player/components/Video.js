import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        console.log(this.props.videoSrc)
        return (
            <div>
                <video src= {this.props.videoSrc} width="320" height="240" controls/>
                {/* <video controls>
                    <source src={this.props.videoSrc}/>
                </video> */}
            </div>
        )
    }
}
