import { useState } from "react";
import styles from "../Forms/forms.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";
import Validacion from "./validation.js";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Forms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login);
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
    dispatch(
      loginUser({ email: userData.email, password: userData.password })
    ).then(() => {
      if (localStorage.access === "true") {
        Swal.fire("Has iniciado sesion correctamente").then(() => {
          navigate("/home");
        });
      }
    });
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

        <button>Log In</button>
        <Link to={"/register"}>
          <p className={styles.doyu}>don't have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Forms;
