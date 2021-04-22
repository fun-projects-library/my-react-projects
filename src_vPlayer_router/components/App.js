import React from 'react';
import Video from "./Video"
import Menu from "./Menu"




class App extends React.Component {

  render() {
    return (
      <div className="card">
        <h1>Video Player</h1>
        <Menu />
        {/* <Video videosObject={VIDEOS}/> */}
        
      </div>
    );
  }
}

export default App;