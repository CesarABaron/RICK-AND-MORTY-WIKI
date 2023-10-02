const verifyUser = (email) => {
  const verifyUser = User.findOne({ where: { email: email } });
  if (verifyUser) {
    return true;
  }
};

module.exports = {
  verifyUser,
};
