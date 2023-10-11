const { User, Characters } = require("../../DB_connection");

const getAllFavorites = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.id);

    if (!user) {
      return res.status(404).json("Usuario no encontrado");
    }

    const userFavorites = await user.getCharacters();

    res.status(200).json(userFavorites);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllFavorites,
};
