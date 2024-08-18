// CardList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import "./CardList.css"; // Import the CSS file
import CreateCard from "./CreateCard";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/api/cards");
        setCards(response.data);
        setFilteredCards(response.data); // Initially, show all cards
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchFilteredCards = cards.filter((card) =>
        card.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredCards(searchFilteredCards);
    } else {
      setFilteredCards(cards); // Show all cards if no search term
    }
  }, [searchTerm, cards]);

  return (
    <div className="card-list-container">
      <div className="search-container">
        <CreateCard />
        <h1>How can we help?</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <ul className="card-list">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <li key={card._id}>
              <h2>{card.title}</h2>
              <hr />
              <p>{card.description}</p>
            </li>
          ))
        ) : (
          <p>No cards found</p>
        )}
      </ul>
    </div>
  );
};

export default CardList;
