import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/navbar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = [
      {
        name: "asad",
        age: 12,
        title: "hello, I am asad"
      },
      {
        name: "Ahmed",
        age: 12,
        title: "hello, I am Ahmed"
      },
      {
        name: "noorullah",
        age: 12,
        title: "hello, I am noorullah"
      },
      {
        name: "asad",
        age: 12,
        title: "hello, I am asad"
      },
      {
        name: "Ahmed",
        age: 12,
        title: "hello, I am Ahmed"
      },
      {
        name: "noorullah",
        age: 12,
        title: "hello, I am noorullah"
      },
      {
        name: "asad",
        age: 12,
        title: "hello, I am asad"
      },
      {
        name: "Ahmed",
        age: 12,
        title: "hello, I am Ahmed"
      },
      {
        name: "noorullah",
        age: 12,
        title: "hello, I am noorullah"
      },
      {
        name: "asad",
        age: 12,
        title: "hello, I am asad"
      },
      {
        name: "Ahmed",
        age: 12,
        title: "hello, I am Ahmed"
      },
      {
        name: "noorullah",
        age: 12,
        title: "hello, I am noorullah"
      },
      

    ];
    setData(arr);
  }, []);

  return (
    <>
   <Navbar/>
   <h1 className="h-20  bg-blue-400 flex items-center justify-center relative m-9 rounded-xl">cards section :</h1>
    <div className="flex flex-row flex-wrap bg-blue-900 justify-around p-2">
      {data.map((ele, index) => (
        <Cards key={index} name={ele.name} age={ele.age} title={ele.title}/>
      ))}
      </div>
    </>
  );
}

export default App;
