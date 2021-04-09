import contacts from "../contacts"
import Card from "./Card"

import React from 'react'

export default function App() {
    console.log(contacts)
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map((element, index) => (

                    <Card fullName={element.name} imgURL={element.imgURL} phone={element.phone} email={element.email}  key={index}/>
                    
                // {<div key={element.id}>
                //     <p >{element.name} </p>
                //     <p>{element.phone} </p>
                //     <p>{element.email} </p>
                //     <img src={element.imgURL} alt="resim" key={index}></img>
                    
                // </div>}
                
                
                
    ))}
    
        </div>
    )
}



