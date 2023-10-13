import styles from "../SearchBar/searchbar.module.css";
import { useEffect, useState } from "react";
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

  const favorites = useSelector((state) => state.myFavorites);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue); // Actualizar input con el nuevo valor
    dispatch(getCharactersByName(inputValue));
    if (inputValue === "") {
      // Verificar inputValue en lugar de e.target.input
      dispatch(getAllCharacters());
    }
  };

  useEffect(() => {
    dispatch(getCharactersByName(input));
  }, [favorites]);

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
        <button onClick={handleExit}>Log Out</button>
      </NavLink>
    </div>
  );
}

export default SearchBar;
