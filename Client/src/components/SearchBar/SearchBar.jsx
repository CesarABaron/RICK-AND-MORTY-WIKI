import styles from "../SearchBar/searchbar.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearFav,
  getAllCharacters,
  getCharactersByName,
} from "../../redux/actions";
import { useLocation } from "react-router-dom";

function SearchBar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const byname = useSelector((state) => state.characterByName);
  const bynameCopy = useSelector((state) => state.characterByName);
  console.log("by name", byname);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue); // Actualizar input con el nuevo valor
    dispatch(getCharactersByName(inputValue));
    if (inputValue === "") {
      // Verificar inputValue en lugar de e.target.input
      dispatch(getAllCharacters());
    }
  };

  const handleExit = () => {
    localStorage.clear();
    dispatch(clearFav());
    navigate("/");
  };

  return (
    <div className={styles.barra}>
      {location.pathname === "/home" && (
        <input
          name="name"
          value={input}
          onChange={handleChange}
          type="search"
        />
      )}

      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>

      <NavLink to="/">
        <button onClick={handleExit}>Salir</button>
      </NavLink>
    </div>
  );
}

export default SearchBar;
