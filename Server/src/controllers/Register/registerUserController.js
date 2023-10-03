const { User } = require("../../DB_connection");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  const saltRounds = 10;
  const plainPassword = req.body.password;
  console.log(plainPassword);

  try {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log(hash);
    const [createUser, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: { password: hash },
    });

    if (created === false) {
      throw Error("Correo electronico ya existe");
    }

    res.status(200).json(created);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  registerController,
};
