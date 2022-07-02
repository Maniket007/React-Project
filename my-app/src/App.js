import { useEffect, useState } from "react";
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
  //const [count, setCount] = useState(0);
//Use effect hooks it is also called as after effect...
//  1.no dependencies array..
//  2.passing an empty dependecies array..
//  3.passing a dependecies array..
//1.no dependencies array-----------> It will run infinite loop..
  /*useEffect(()=>{
    document.title = `you clicked on ${count} items`
  });*/
//2.passing an empty dependecies array------------------------> It will run only once whenever components will load..
  /*useEffect(()=>{
  document.title = `you clicked on ${count} items`
  },[]);*/
//3.passing a dependecies array--------------> It depends so it will run again and again..
//useEffect(()=>{
  //document.title = `you clicked on ${count} items`
  //},[count]);
  /*return (
    <div className="app">
        <h1>Fetch Data</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count+1)}>Click Me!</button>
    </div>
  );*/
  //Get request...................................
  const [data, setdata] = useState([]);
  const fetchData = async () => 
  async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setdata(data);
  };
  /*useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => setdata(data))
  .catch((error) => console.log(error));
  }, []);
  console.log(data);*/
  //fetch('https://jsonplaceholder.typicode.com/users')
  //.then((response) => response.json())
  //.then((data) => console.log(data))
  //.then((data) => setdata(data))
  //.catch(error => console.error(error));




//this will give the promise output..
// for promise there will be two cases  1. resolved----> it means data is found now we will use .then method...
//                                      2. rejected----> it means data is not available now we will use .catch method...
  return(
    <div className="app">
      <h1>Fetch Data</h1>
    </div>
  );
}

export default App;
