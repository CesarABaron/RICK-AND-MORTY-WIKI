const { User, Characters } = require("../../DB_connection");

const getAllFavorites = async (req, res) => {
  try {
    const userFavorites = await User.findOne({
      where: { id: req.body.id },
      include: { model: Characters },
    });

    res.status(200).json(userFavorites);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllFavorites,
};
