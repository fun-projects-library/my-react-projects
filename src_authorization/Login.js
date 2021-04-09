import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      authorized: false,
      inputVal: "",
      counter: 3
    }
  }
  
  checkAuthorize(){
    if(this.state.inputVal === this.props.user.password){
      this.setState({authorized: true})
    } else {
      this.setState({counter: this.state.counter-1})
      if(this.state.counter === 1){
        alert("wait for 10 seconds")
        setTimeout(() => {
          this.setState({counter: 3})
        }, 5000);
      }
    }
  } 

  inputHandler=(event)=>{
    this.setState({inputVal: event.target.value})
  }

  
  render() {
    
let login = (
  <div className="card">
        <form className="form-inline" action='#'>
          <div className="form-group">
            <input type="password" className="form-control mx-sm-3" placeholder="Password" onChange={this.inputHandler}/>
            <button type="submit" className="btn btn-primary" disabled={this.state.counter === 0 ? true : false} onClick={this.checkAuthorize.bind(this)}>Submit</button>
          </div>
        </form>
      </div>
);

let contact = (
  <div className="card">
    <div className="top">
                <h2 className="name">{this.props.user.name}</h2>
                <img className="circle-img" src={this.props.user.imgURL} alt="sdfdsfs" />
                </div>
            <div className="bottom">
            <p className="info">{this.props.user.phone}<br></br>{this.props.user.mail}</p>
            </div>
  </div>
);



return (
  <div id="authorization">
    <h1>{this.state.authorized ? "Contact Profile"  : "Enter the Password"}</h1>
    {this.state.authorized ? contact : login} 
  </div>
)
  }
}


export default Login;