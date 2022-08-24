import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  //initial value for color state
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  //update color state to a new value
  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
