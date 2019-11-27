import "./Layout.css";

import React from "react";
import { connect } from "react-redux";
import { GiMiteAlt } from "react-icons/gi";
import { headerAction } from "./../../Store/actions/action-creator";


class Header extends React.Component {

  componentDidMount() {
    this.props.loadList();
  }
  
  render() {
    return (
      <header>
        <h1><GiMiteAlt/><span>React Shopper</span></h1>
        <span>Selected: {this.props.selected}</span>
        <span>Total: {this.props.total}</span>
      </header>
    );
  }
}

const mapStateToProps = state => prevstate => prevstate.cards;
const mapDispatchToProps = dispatch => {
  return {
    loadList: ()=>dispatch(headerAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
