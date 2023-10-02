const { Characters } = require("../../DB_connection");

const getAllCharacters = async (req, res) => {
  const getCharacters = await Characters.findAll();
  res.status(200).json(getCharacters);
};

module.exports = {
  getAllCharacters,
};
