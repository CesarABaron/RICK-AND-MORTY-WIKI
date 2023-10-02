const { User } = require("../../DB_connection");
const bcrypt = require("bcrypt");

const registerController = (body) => {
  const saltRounds = 10;
  const plainPassword = body.password;

  bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
    const createUser = User.create({
      email: body.email,
      password: hash,
    });
  });
};

module.exports = {
  registerController,
};
