import styles from "./app.module.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState({
    firstCard: 1,
    lastCard: 20,
  });

  const nextPage = () => {
    if (page.lastCard > 1) {
      alert("this is the first page ");
      return;
    } else {
      setPage({ ...page, firstCard: firstCard + 20, lastCard: lastCard + 20 });
      dispatch(next(page));
    }
  };

  const backpage = () => {
    setPage({ ...page, firstCard: firstCard - 20, lastCard: lastCard - 20 });
    dispatch(back(page));
  };

  useEffect(() => {
    if (localStorage.length === 0) {
      navigate("/");
    }

    if (localStorage.access === true && !allCharacters) {
      setLogin(true);
      dispatch(getAllCharacters());
    }
  }, []);

  const location = useLocation();

  return (
    <div className={styles.app}>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <SearchBar />
      )}

      <div className={styles.paginate}>
        <button>Back</button>
        <button>Next</button>
      </div>

      <Routes>
        {characterByName?.length === 0 ? (
          <Route path="/home" element={<Cards characters={allCharacters} />} />
        ) : (
          <Route
            path="/home"
            element={<Cards characters={characterByName} />}
          />
        )}

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Forms />} />
        <Route path="/register" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
