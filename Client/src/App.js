import styles from "./app.module.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail.component";
import Forms from "./components/Forms/Forms.module";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites.module";
import { useSelector } from "react-redux";
import { getAllCharacters } from "../src/redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const allCharacters = useSelector((state) => state.allCharacters);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [access, setAccess] = useState(true);

  const onClose = (id) => {
    const charactersfiltered = characters.filter((char) => char.id !== id);
    setCharacters(charactersfiltered);
  };

  useEffect(() => {
    if (allCharacters.length > 0) {
      dispatch(getAllCharacters());
    }
    !access && navigate("/");
  }, [access]);

  const ocation = useLocation();

  return (
    <div className={styles.app}>
      {ocation.pathname !== "/" && <SearchBar />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={allCharacters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
