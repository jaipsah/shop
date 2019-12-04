import "./style/Card.css";

import React from "react";
import { connect } from "react-redux";

import Checkbox from "./../../../Common/Checkbox";
import Button from "../../../Common/Button";
import Toolbar from "./Toolbar";

import state from "./../../../../Store/";
import { checkBoxAction } from "./../../../../Store/actions/action-creator";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = state.getState() || {};
    this.onCheck = this.onCheck.bind(this);
  }
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
        <h2>{this.props.title}</h2>
        <Checkbox
          checked={this.state.checked}
          onChange={isChecked => this.onCheck(isChecked)}
        />
        <Toolbar type={"toolbar danger"}>
          <Button type="delete" text="delete" />
        </Toolbar>
      </div>
    );
  }

  onCheck(isChecked) {
    this.props.onChecked(isChecked);
  }
}

const mapStateToProps = state => ({ checked: state.checked });
const mapDispatchToProps = dispatch => {
  return {
    onChecked: isChecked => dispatch(checkBoxAction(isChecked))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
