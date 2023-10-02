import { useState } from "react";
import styles from "../Forms/forms.module.css";

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

const Forms = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validacion({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>

        <div className={styles.div1}>
          <label className="email">Email: </label>
          <input
            placeholder="Ingresa tu email..."
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          ></input>
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.div2}>
          <label className="password">Password: </label>
          <input
            placeholder="Ingresa tu contraseña..."
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          ></input>
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
