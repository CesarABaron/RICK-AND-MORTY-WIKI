const { User } = require("../../DB_connection");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
      const hashedPasswordFromDatabase = user.password;

      const response = await bcrypt.compare(
        req.body.password,
        hashedPasswordFromDatabase
      );

      if (response === true) {
        return res.status(200).json({ id: user.id, acces: true });
      }
    }

    throw Error("Credenciales invalidas");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  loginController,
};
