const { User, Characters } = require("../../DB_connection");

const postFavorite = async (req, res) => {
  try {
    const response = await User.findByPk(req.body.id);
    const responseCharacters = await Characters.findByPk(req.body.char);
    const message = { message: "" };

    isFavorited = await response.hasCharacters(responseCharacters);

    if (!isFavorited) {
      await response.addCharacters(responseCharacters);
      message.message = "Favorited Added";
    }

    if (isFavorited) {
      await response.removeCharacters(responseCharacters);
      message.message = "Favorited Deleted";
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postFavorite,
};
