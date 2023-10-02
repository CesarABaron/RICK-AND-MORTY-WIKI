const { Characters } = require("../../DB_connection");
const { Op } = require("sequelize");

const getCharacterByName = async (req, res) => {
  // const page = req.query.page;
  // const pageSize = 20;

  try {
    const response = await Characters.findAll({
      where: {
        name: { [Op.iLike]: `%${req.query.name}%` },
      },
      // limit: pageSize,
      // offset: (page - 1) * pageSize,
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getCharacterByName,
};
