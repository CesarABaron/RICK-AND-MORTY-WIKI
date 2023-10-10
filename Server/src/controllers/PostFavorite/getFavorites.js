const { User, Characters } = require("../../DB_connection");

const getAllFavorites = async (req, res) => {
  const userFavorites = await User.findAll({ include: { model: Characters } });

  res.status(200).json(userFavorites);
};

module.exports = {
  getAllFavorites,
};
