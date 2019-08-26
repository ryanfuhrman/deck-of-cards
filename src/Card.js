import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { img, name, deg, margin } = this.props;
    return (
      <img
        className="Card"
        src={img}
        alt={name}
        style={{ transform: `rotate(${deg}deg)`, marginTop: `${margin}px` }}
      />
    );
  }
}
