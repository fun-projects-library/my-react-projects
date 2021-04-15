import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
  
  const removeUser = (para) => {
    console.log(para);
    props.deleteUser(para)
  }
    return (
        <tbody>
          {props.users.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td><button onClick={()=>removeUser(item.name)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      )
}

class Table extends Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody users={this.props.users} deleteUser={this.props.deleteUser}/>
        </table>
      )
    }
  }

export default Table;