const { Favorite } = require("../../DB_connection");

const getAllFavorites = async (req, res) => {
  const getCharacters = await Favorite.findAll();
  res.status(200).json(getCharacters);
};

module.exports = {
  getAllFavorites,
};
