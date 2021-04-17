import React, { useState } from 'react'


export default function Form(props) {

    const [searchVal, setsearchVal] = useState("")

    const searchFunc = (e) => {
        e.preventDefault();
        props.handleData(searchVal);
        setsearchVal("")
        
    }

    const searchChange = (e) => {
        setsearchVal(e.target.value)
    }

    return (
        <div>
            
            <input type="text" onChange ={searchChange}/>
            <button onClick={searchFunc}>Search</button>
        </div>
    )
}
