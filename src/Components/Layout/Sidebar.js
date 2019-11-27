import React from "react";

class Sidebar extends React.Component {


  render() {
    return <h5>Sidebar</h5>//this.props.cards.cards.map(({id, title}) => <li key={id}>{title.split(/\s/)[0]}</li>);
  }

}

export default Sidebar;
