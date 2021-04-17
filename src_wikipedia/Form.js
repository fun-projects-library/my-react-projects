// import React, { useState } from 'react'


// export default function Form(props) {

//     const [searchVal, setsearchVal] = useState("")

//     const searchFunc = (e) => {
//         e.preventDefault();
//         props.handleData(searchVal);
//         setsearchVal("")
        
//     }

//     const searchChange = (e) => {
//         setsearchVal(e.target.value)
//     }

//     return (
//         <div>
            
//             <input type="text" onChange ={searchChange}/>
//             <button onClick={searchFunc}>Search</button>
//         </div>
//     )
// }


import React, { useState } from 'react'

export default function Form(props) {

    const [element, elementset] = useState("")

    // state = {
    //     item: ""
    // }

    // setState({ item: e.target.value});

    const handleChange = (e) => {
        // console.log(e.target.value);
        elementset(e.target.value)
    }

    //console.log(element)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.fetchFunc(element)
    }

    return (
        <form>
            
            <input type="text" onChange={handleChange}/>
            <button onClick={handleSubmit}>Search</button>
        </form>
    )
}

