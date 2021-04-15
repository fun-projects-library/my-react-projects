import React from 'react';
import {names} from "./names"

export class Select extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  
  handleChange=(e)=>{
    this.props.method(e.target.value)
    
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => 
      {
        console.log(json)
        this.setState({items: json})
      })
    .catch(err=>console.log(err))
  
  }

  render() {
    
    return (
      
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
        {this.state.items.map((item,index) =>{
            return <option value={item.name} key={index}>{item.name}</option>
          })}
           
        {/* {names.map((item,index) =>{
            return <option value={item} key={index}>{item}</option>
          })} */}
          
        </select>
      </div>
    );
  }
}