import React from 'react';
import {names} from "./names"

export class Select extends React.Component {
  constructor(props){
    super(props);
    
  }
  
  handleChange=(e)=>{
    this.props.method(e.target.value)
    // this.setState({option: e.target.value})
  }

  render() {
    
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
        

        {names.map((item,index) =>{
            return <option value={item} key={index}>{item}</option>
          })}
          
        </select>
      </div>
    );
  }
}