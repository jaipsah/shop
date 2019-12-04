import "./styles/checkbox.css";
import React from "react";
import { MdCheck, MdRemove } from "react-icons/md";
class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };

    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onCheckboxClick() {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.onChange(this.state.checked);
    });
  }

  render() {
    return (
      <div
        className="checkbox unchecked"
        type="checkbox"
        defaultChecked={this.props.checked}
        onClick={this.onCheckboxClick}
      >
        {this.state.checked ? <MdCheck /> : <MdRemove />}
      </div>
    );
  }
}

export default Checkbox;
