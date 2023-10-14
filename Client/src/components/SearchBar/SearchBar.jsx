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
      <div className={styles.containert}>
        <h2 className={styles.tittle}>Rick and Morty Wiki</h2>
      </div>
      <div className={styles.bcontariner}>
        {location.pathname === "/home" && (
          <input
            name="name"
            value={input}
            onChange={handleChange}
            type="search"
            placeholder="Search By Name ..."
          />
        )}

        <NavLink to="/favorites">
          <button className={styles.NavButton}>Favorites</button>
        </NavLink>
        <NavLink to="/home">
          <button className={styles.NavButton}>Home</button>
        </NavLink>

        <NavLink to="/">
          <button className={styles.NavButton} onClick={handleExit}>
            Log Out
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBar;
