import React from 'react'
import Avatar from "./Avatar"
import Details from "./Details"


export default function Card(props) {
    
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.fullName}</h2>
                <Avatar imgURL={props.imgURL}/>
                </div>
            <div className="bottom">
                <Details phone={props.phone} email={props.email}/>
            </div>
            
            
        </div>
    )
}
