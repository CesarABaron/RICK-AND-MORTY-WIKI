const { User, Characters } = require("../../DB_connection");

const postFavorite = async (req, res) => {
  try {
    const response = await User.findByPk(req.body.id);
    const responseCharacters = await Characters.findByPk(req.body.char);
    const responseResult = { message: "", response: "" };

    isFavorited = await response.hasCharacters(responseCharacters);

    if (!isFavorited) {
      const responseAddChar = await response.addCharacters(responseCharacters);
      responseResult.response = responseAddChar;
    }

    if (isFavorited) {
      const responsDellChar = await response.removeCharacters(
        responseCharacters
      );
      responseResult.response = responsDellChar;
    }

    res.status(200).json(responseResult);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postFavorite,
};
