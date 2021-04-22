import React from 'react'
import {Link, Route, Switch} from "react-router-dom"
import Video from "./Video"

export default function Menu() {
    return (
        <div>
            <Link to="/Video/fast">Fast</Link><br />
            <Link to="/Video/slow">Slow</Link><br />
            <Link to="/Video/cute">Cute</Link><br />
            <Link to="/Video/eek">Eek</Link>

            <Switch>
                <Route path="/Video/:genre" component={Video} />
            </Switch>
        </div>
    )
}

