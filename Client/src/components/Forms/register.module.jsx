import style from "./registerForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Register = useSelector((state) => state.createUser);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (!input.email && !input.password) ||
      (!input.email && input.password) ||
      (input.email && !input.password)
    ) {
      setError(true);
      return;
    }

    if (input.email && input.password) {
      setError(false);
    }

    try {
      await dispatch(registerUser(input));
      navigate("/");
    } catch (error) {
      Swal.fire(error);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1 className={style.title}>Register</h1>
        <label>Email</label>
        <input onChange={handleChange} value={input.email} name="email"></input>
        <label>Password</label>
        <input
          onChange={handleChange}
          value={input.password}
          name="password"
          type="password"
        ></input>
        <button onClick={handleSubmit} className={style.button} type="submit">
          Sign Up
        </button>
        <Link to="/">
          <button> Do you already have an account? </button>
        </Link>
        {error && <p>Invalid credentials</p>}
      </form>
    </div>
  );
};

export default Example;
