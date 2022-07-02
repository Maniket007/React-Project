import { useState } from "react";
import './App.css';
import React from 'react';

//When someone wnats to fetch the data then the data is stored somewhere which is server...
//we have four types of request which is bascially used to fetch the data from the server..
//    1.C-Create---Post
//    2.R-Read-----GET
//    3.U-Update---PUT
//    4.D-Delete---DELETE



// When we want to update the state then we should use this function....
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
        <h1>Fetch Data</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count+1)}>Click Me!</button>
    </div>
  );
}

export default App;
