const { Characters, User } = require("../../DB_connection");

const getAllCharacters = async (req, res) => {
  // const page = req.query.page;
  // const pageSize = 20;

  const getCharacters = await Characters.findAll({
    order: [["id", "ASC"]],
    include: { model: User },
    // limit: pageSize,
    // offset: (page - 1) * pageSize,
  });
  res.status(200).json(getCharacters);
};

module.exports = {
  getAllCharacters,
};
