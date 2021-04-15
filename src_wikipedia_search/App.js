import React from "react";
import Form from "./Form"

function App() {

  const data = [];

  const handleData = () => {
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=SEARCH-WORD&format=json&origin=*&limit=10`)
    .then(resp => resp.json())
    .then(jsonResponse =>{
      console.log(jsonResponse);
      data.push(jsonResponse)
  });
  }

  handleData()

  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      
      <Form />
    </div>
  );
}

export default App;
