import styles from "../SearchBar/searchbar.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharactersByName } from "../../redux/actions";

function SearchBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setid(e.target.value);
    setName(e.target.value);
    dispatch(getCharactersByName(name));
  };

  const handleExit = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={styles.barra}>
      <input type="search" onChange={handleChange} />

      <NavLink to="/favorites">
        {" "}
        <button>Favorites</button>{" "}
      </NavLink>
      <NavLink to="/home">
        {" "}
        <button>Home</button>{" "}
      </NavLink>
      <NavLink to="/about">
        {" "}
        <button>About</button>{" "}
      </NavLink>
      <NavLink to="/">
        {" "}
        <button onClick={handleExit}>Salir</button>{" "}
      </NavLink>
    </div>
  );
}

export default SearchBar;
