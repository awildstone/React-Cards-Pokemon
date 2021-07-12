import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";
import { formatCardData } from './helpers';

const BASE_URL = 'https://deckofcardsapi.com/api/deck/new/draw/';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard, clearCards] = useAxios('playing_cards', BASE_URL);
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCardData)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear Playing Cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.front} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;