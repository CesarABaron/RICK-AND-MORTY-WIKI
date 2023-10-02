const { User } = require("../../DB_connection");

const loginController = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return user;
  }
};

module.exports = {
  loginController,
};
