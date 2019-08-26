import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "",
      remaining: "",
      cards: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.generateRandom = this.generateRandom.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    console.log(response);
    this.setState({
      deckID: response.data.deck_id,
      remaining: response.data.remaining,
    });
  }

  async handleClick() {
    let newCard = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`
    );
    const { image, suit, value, code } = newCard.data.cards[0];
    const cardInfo = {
      image,
      name: `${value} of ${suit}`,
      id: code,
      randomDegree: this.generateRandom(45),
      randomMargin: this.generateRandom(20),
    };
    this.setState(st => ({
      remaining: st.remaining - 1,
      cards: [...st.cards, cardInfo],
    }));
  }

  generateRandom(num) {
    return Math.floor(Math.random() * num) + Math.floor(Math.random() * -num);
  }

  render() {
    return (
      <div className="Deck">
        {this.state.remaining > 0 ? (
          <button className="Deck-button" onClick={this.handleClick}>
            Draw New Card
          </button>
        ) : (
          <p>That's the end of the deck!</p>
        )}
        <div className="Deck-cards">
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              img={card.image}
              name={card.name}
              deg={card.randomDegree}
              margin={card.randomMargin}
            />
          ))}
        </div>
        <p className="Deck-remaining">
          Cards Remaining: {this.state.remaining}
        </p>
      </div>
    );
  }
}
