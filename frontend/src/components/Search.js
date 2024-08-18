import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Search.css";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search"
      />
    </div>
  );
};

export default Search;
