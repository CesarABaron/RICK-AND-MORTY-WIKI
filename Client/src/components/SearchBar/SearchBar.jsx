import styles from "../SearchBar/searchbar.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharactersByName } from "../../redux/actions";
import { useLocation } from "react-router-dom";

function SearchBar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(getCharactersByName(input));
  };

  const handleExit = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={styles.barra}>
      {location.pathname === "/home" && (
        <input name="name" onChange={handleChange} type="search" />
      )}

      {location.pathname === "home" && (
        <button onClick={handleSubmit}>Search</button>
      )}

      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/">
        <button onClick={handleExit}>Salir</button>
      </NavLink>
    </div>
  );
}

export default SearchBar;
