import React from 'react';
import './App.scss';
import {Button} from "./Component/Button/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={()=>console.log('Hello')} label="Hello"/>
    </div>
  );
}

export default App;
