const {
  registerController,
} = require("../../controllers/Register/registerUserController");

const registerHanlder = async (req, res) => {
  const user = req.body;
  try {
    const response = await registerController(user);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  registerHanlder,
};
