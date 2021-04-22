import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Notfound extends Component {
    render() {
        return (
            <div>
                <h3>Error 404! Page Not Found</h3>
                <Link to="/">Home</Link>
            </div>
        )
    }
}
