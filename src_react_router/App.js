import React, { Component } from 'react';
import Home from "./components/Home"
import About from "./components/About"
import Messages from "./components/Messages"
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Notfound from './components/Notfound';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/messages">Messages</Link></li>
          </ul>
          
        </div>
        <div className="App-intro">
          <Switch>
            <Route path='/' exact strict component={Home}/>
            <Route path= '/about' exact strict component ={About}/>
            <Route path='/messages'  component ={Messages}/>
            <Redirect from ='/home' to='/'/>
            <Route component={Notfound}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
