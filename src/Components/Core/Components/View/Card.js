import React from "react";
import Checkbox from "./../../../Common/Checkbox";

import './style/Card.css';
import Button from "../../../Common/Button";
import Toolbar from "./Toolbar";

class Card extends React.Component {

  constructor(props){
    super(props);
    this.checked = false;
    this.onCheck = this.onCheck.bind(this);
  }
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
        <h2>{this.props.title}</h2>
        <Checkbox checked={this.checked} onChange={(event)=>this.onCheck(event)}/>
        <Toolbar type={"toolbar danger"}>
            <Button type="delete" text="delete" />
        </Toolbar>
      </div>
    );
  }

  onCheck(e){
    this.checked = !this.checked;
    console.log(this.props)
  }

}

export default Card;
