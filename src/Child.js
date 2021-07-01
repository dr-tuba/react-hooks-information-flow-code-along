import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  return <div onClick={props.function}className="child" style={{ backgroundColor: props.childColor }} />;
}

export default Child;
