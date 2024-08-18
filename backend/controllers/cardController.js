const Card = require("../models/Card");

const createCard = async (req, res) => {
  const { title, description } = req.body;

  try {
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCardByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCard,
  getAllCards,
  getCardByTitle,
};
