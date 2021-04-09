import React from 'react'

export default function Details(props) {
    return (
        <div>
            <p className="info">{props.phone}<br></br>{props.email}</p>
        </div>
    )
}
