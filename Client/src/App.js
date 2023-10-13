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
import { getAllCharacters, next, back } from "../src/redux/actions";

function App() {
  const allCharacters = useSelector((state) => state.allCharacters);
  const characterByName = useSelector((state) => state.characterByName);
  const paginateHomeView = useSelector((state) => state.paginateHomeView);

  console.log(characterByName);

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState({
    firstCard: 0,
    lastCard: 20,
  });

  const nextPage = (e) => {
    setPage({
      ...page,
      firstCard: page.firstCard + 20,
      lastCard: page.lastCard + 20,
    });
    dispatch(
      next({
        ...page,
        firstCard: page.firstCard + 20,
        lastCard: page.lastCard + 20,
      })
    );
  };

  const backpage = (e) => {
    if (page.firstCard === 0) {
      alert("last Page");
    } else {
      setPage({
        ...page,
        firstCard: page.firstCard - 20,
        lastCard: page.lastCard - 20,
      });
      dispatch(
        back({
          ...page,
          firstCard: page.firstCard - 20,
          lastCard: page.lastCard - 20,
        })
      );
    }
  };

  useEffect(() => {
    if (localStorage.length === 0) {
      navigate("/");
    }

    dispatch(getAllCharacters());

    // if (localStorage.access === true && !allCharacters) {
    //   setLogin(true);
    //   ;
    // }
  }, []);

  const location = useLocation();

  return (
    <div className={styles.app}>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <SearchBar />
      )}

      <div className={styles.paginate}>
        <button onClick={backpage}>Back</button>
        <button onClick={nextPage}>Next</button>
      </div>

      <Routes>
        <Route
          path="/home"
          element={
            characterByName[0] === false ? (
              <div>No hay Personajes con este nombre</div>
            ) : characterByName.length > 0 ? (
              <Cards characters={characterByName} />
            ) : (
              <Cards characters={allCharacters} />
            )
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Forms />} />
        <Route path="/register" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
