import React, { Component } from 'react'


export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    Increase = () =>{
        this.setState({count: this.state.count+1})
    }
    Decrease(){
        this.setState({count: this.state.count-1})
    }
    render() {
        return (
            <div className="card">
                <h1>{this.state.count}</h1>
                <button onClick={this.Increase}>+</button>
                <button onClick={this.Decrease.bind(this)}>-</button>
            </div>
        )
    }
}
