import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { img, suit, val, deg, margin } = this.props;
    return (
      <img
        className="Card"
        src={img}
        alt={`${val} of ${suit}`}
        style={{ transform: `rotate(${deg}deg)`, marginTop: `${margin}px` }}
      />
    );
  }
}
