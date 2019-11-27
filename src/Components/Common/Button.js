import React from "react";
import { MdDelete, MdInfo, MdAddCircle } from "react-icons/md";

import Label from "./Label";

function Button(props) {
  let btnIconType = props.type,
    icon = <MdInfo />;

  if (btnIconType === "delete") {
    icon = <MdDelete />;
  } else if (btnIconType === "add") {
    icon = <MdAddCircle />;
  } else {
    icon = <MdInfo />;
  }

  return (
    <div className="button" onClick={props.onClick}>
      {icon}
      {/* <Label text={props.text ? props.text : "+ Add card"} /> */}
    </div>
  );
}

export default Button;
