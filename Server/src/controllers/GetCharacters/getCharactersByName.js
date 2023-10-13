const { Characters, User } = require("../../DB_connection");
const { Op } = require("sequelize");

const getCharacterByName = async (req, res) => {
  // const page = req.query.page;
  // const pageSize = 20;

  try {
    const response = await Characters.findAll({
      where: {
        name: { [Op.iLike]: `%${req.query.name}%` },
      },
      order: [["id", "ASC"]],
      include: { model: User },
    });

    if (response.length === 0) {
      return res.status(201).json([false]);
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getCharacterByName,
};
