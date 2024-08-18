// CreateCard.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateCard.css"; // Import the CSS file

const CreateCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = { title, description };

    try {
      await axios.post("/api/cards", newCard);
      setTitle("");
      setDescription("");
      toast.success("New card added successfully!");

      // Optionally refresh the page to see the new card
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error adding card:", error);
      toast.error("Failed to add card.");
    }
  };

  return (
    <div className="create-card-container">
      <ToastContainer /> {/* ToastContainer should be included */}
      <form onSubmit={handleSubmit}>
        <h2>Create a New Card</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
};

export default CreateCard;
