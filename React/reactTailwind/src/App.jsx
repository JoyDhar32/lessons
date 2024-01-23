import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
 let person ={
    name:"Joy Dhar",
    age: 23,
    designation:"Software Engineer"
 }
 let arr = [1,2,3,4,5,6,7,8,9,10];
  
  return (
    <>
      <h1 className="text-3xl bg-green-700">React + Tailwind Css</h1>
     
      <Card  person= {person} number={arr}/>
   
    </>
  );
}

export default App;
