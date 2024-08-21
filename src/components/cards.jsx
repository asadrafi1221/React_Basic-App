import React from "react";

function Cards(props) {
  return (
    <div className="bg-blue-400 text-blue-900 rounded-xl w-40 p-6 m-2">
      <h2 className="font-bold text-black-700">{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.title}</p>
    </div>
  );
}

export default Cards;
