import styles from "../SearchBar/searchbar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharactersByName } from "../../redux/actions";

function SearchBar(props) {
  const characters = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    setid(e.target.value);
    setName(e.target.value);
    dispatch(getCharactersByName(name, currentPage));
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
    </div>
  );
}

export default SearchBar;
