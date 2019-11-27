import "./Layout.css";

import React from "react";
import { connect } from "react-redux";

import Sidebar from "./Sidebar";
import Button from "./../Common/Button.js";
import Card from "./../Core/Components/View/Card";
import { mainAction } from "../../Store/actions/action-creator";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.cardId = 0;
    this.createCard = this.createCard.bind(this);
  }

  componentDidMount() {
  }
  
  createCard(event) {
    this.props.createCard();
    this.list = this.props.cards || [];
  }
  
  render() {
    return (
      <main>
        <ul>
          <Sidebar list={this.list} />
        </ul>
        <section>
          <div>
            <Button onClick={this.createCard} type={"add"} text={"Add card"} />
          </div>
          {this.props.cards.map(({ id = !this.cardId && this.cardId+1, title, thumbnailUrl }) => (
            <Card key={id} title={title.split(/\s/)[0]} img={thumbnailUrl} />
          ))}
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => state.cards;
const mapDispatchToProps = (dispatch) => {
  return {
    createCard: () => dispatch(mainAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
