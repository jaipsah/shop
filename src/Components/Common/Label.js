import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
function Label(props) {
  return (
    <label className="label">
      {props.text ? props.text : <MdAddCircleOutline/>+"Add card"}
    </label>
  );
}

export default Label;
