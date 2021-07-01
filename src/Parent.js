import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  function handleColor() {
    const randomColor = getRandomColor();
    setColor(randomColor)
    setChildColor(getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child 
        function = {handleColor}
        childColor = {childColor}
       />
      <Child 
       function = {handleColor}
       childColor = {childColor}
       />
    </div>
  );
}

export default Parent;
