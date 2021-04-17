import React, { useState } from "react";
import Form from "./Form"

function App() {

  const [data, setdata] = useState(["",[],[],[]])

  const handleData = (data) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${data}&format=json&origin=*&limit=10`)
    .then(resp => resp.json())
    .then(jsonResponse =>{
      console.log(jsonResponse);
      setdata(jsonResponse)
  });
  }

  

  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      
      <Form handleData={handleData}/>

      <ul>
        {data[3].map((entry, index) => {
          return (
            <a href={entry} target="_blank" rel="noreferrer" key={index}>
              <li>{entry}</li>
            </a>
          );
        })}
      </ul>
      
    </div>
  );
}

export default App;
