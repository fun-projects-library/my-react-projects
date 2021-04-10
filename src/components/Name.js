import React from 'react';
import { wishes } from "./wishes"

export class Name extends React.Component {
  constructor(props){
    super(props);
    
  }
  
  render() {

    return (
      <div>
        <h1>Hey, my name is {this.props.name}!</h1>
        <h2>Don't you think {this.props.name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {this.props.name}!</h2>
        <p>{wishes[Math.floor(Math.random()*wishes.length)]}</p>
      </div>
    );
  }
}