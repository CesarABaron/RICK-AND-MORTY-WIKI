import styles from "./app.module.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail.component";
import Forms from "./components/Forms/Forms.module";
import Example from "./components/Forms/register.module";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites.module";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../src/redux/actions";

function App() {
  const allCharacters = useSelector((state) => state.allCharacters);
  const characterByName = useSelector((state) => state.characterByName);
  const loginAcces = useSelector((state) => state.loginAcces);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [access, setAccess] = useState(false);

  const onClose = (id) => {
    const charactersfiltered = characters.filter((char) => char.id !== id);
    setCharacters(charactersfiltered);
  };

  useEffect(() => {
    dispatch(getAllCharacters());

    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  return (
    <div className={styles.app}>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <SearchBar />
      )}

      <Routes>
        {characterByName.length === 0 ? (
          <Route
            path="/home"
            element={<Cards characters={allCharacters} onClose={onClose} />}
          />
        ) : (
          <Route
            path="/home"
            element={<Cards characters={characterByName} onClose={onClose} />}
          />
        )}

        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Forms />} />
        <Route path="/register" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
