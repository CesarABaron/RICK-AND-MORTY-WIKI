const { Characters } = require("../../DB_connection");

const getCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Characters.findOne({ where: { id: id } });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).status(error.message);
  }
};

module.exports = {
  getCharacterById,
};
