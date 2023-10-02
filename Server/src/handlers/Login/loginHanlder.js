const { loginController } = require("../../controllers/Login/loginControler");

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = loginController(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  loginHandler,
};
