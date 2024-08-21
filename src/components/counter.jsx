import React from "react";

const Counter = (props) => {
  return (
    <>
      <h1>{props.value}</h1>
      <p>{props.name?"helo i am in":"my name is asad"}</p>
    </>
  );
};

export default Counter;
