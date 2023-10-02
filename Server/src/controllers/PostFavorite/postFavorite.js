const { Favorite } = require("../../DB_connection");

const postFavorite = async (req, res) => {
  try {
    const response = await Favorite.create({
      id: req.body.id,
      name: req.body.name,
      status: req.body.status,
      species: req.body.species,
      gender: req.body.gender,
      origin: req.body.origin,
      image: req.body.image,
    });

    res.status(200).json("se ha creado corretamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postFavorite,
};
