import React, { Component } from "react";
import Card from "./Card";

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("new card");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>New Card</button>
        <Card />
        <Card />
      </div>
    );
  }
}
