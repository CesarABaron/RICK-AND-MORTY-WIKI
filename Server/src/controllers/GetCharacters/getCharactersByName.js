const { Characters } = require("../../DB_connection");
const { Op } = require("sequelize");

const getCharacterByName = async (req, res) => {
  try {
    const response = await Characters.findAll({
      where: { name: { [Op.iLike]: `%${req.query.name}%` } },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getCharacterByName,
};
