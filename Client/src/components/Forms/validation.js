const Validacion = (userData) => {
  let errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "Invalid Email";
  }

  if (userData.email.length >= 35) {
    errors.emailLength = "Email length exceeds limit";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Password must contain a digit";
  }

  if (userData.password.length < 6 || userData.password.length > 12) {
    errors.password = "Password must be between 6 and 10 characters";
  }

  return errors;
};

export default Validacion;
