import React from 'react'

export default function Avatar(props) {
    return (
        <div>
            <img className="circle-img" src={props.imgURL}/>
        </div>
    )
}
