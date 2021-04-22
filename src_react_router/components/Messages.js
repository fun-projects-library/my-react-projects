import React from 'react'
import {Link, Switch, Route} from "react-router-dom"
import Message from "./Message"

export default function Messages (props) {
    console.log(props.match.url)
    return (
        <div>
            <h2>This is my Messages page!</h2>
            <ul>
                <Link to='/messages/1'> <li key="1">Message Number - 1 </li></Link>
                <Link to= '/messages/2'><li key="2">Message Number - 2 </li></Link>
                <Link to= '/messages/3'><li key="3">Message Number - 3 </li></Link>
            </ul>
            <Switch>
                {/* <Route path="/messages/:id"><Message /></Route> */}
                <Route path='/messages/:abc' component ={Message}></Route>
                <Route path={props.match.url} render={
                    () => <h3>Please select a message!</h3>
                } />
            </Switch>
        </div>
    )
}
