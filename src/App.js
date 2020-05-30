import React from 'react';
import {Upload} from "./components/Upload"
// import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{textAlign:"center"}}>
    <h1>File Ninja</h1>
      <h4>The sneaky, ephemeral file share</h4>
      <Upload />
    </div>
    </div>
  );
}

export default App;
