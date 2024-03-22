import React from "react";

const App = () => {
  let name="Joy Dhar"
  let x = 10; 
  let y = 20;
  let arr=['a','b','c','d']
  return (
    <>
      <div className="text-5xl text-red-500">App</div>
      <div className="text-2xl text-purple-500">{name}</div>
      {
        x > y ? <div className="text-2xl text-green-500">{x} is greater than {y}</div> : <div className="text-2xl text-green-500">{y} is greater than {x}</div>
      }
      <ul>
        {
          arr.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>   
    </>
  );
};

export default App;
