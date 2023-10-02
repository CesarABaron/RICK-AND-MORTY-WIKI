import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../Card/Card";
import {
  allFavorites,
  filterCards,
  orderCards,
  removeFav,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MainDiv, MainDiv2 } from "./styled.components";
import styles from "./favorite.module.css";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  // useEffect(() => {
  //   dispatch(allFavorites());
  // }, []);

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    if (e.target.value === "allFavorite") {
      dispatch(allFavorites());
    } else {
      dispatch(filterCards(e.target.value));
    }
  };

  return (
    <MainDiv>
      <MainDiv2>
        <select className={styles.select1} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select className={styles.select2} onChange={handleFilter}>
          <option value="allFavorite"> All Favorites </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </MainDiv2>

      {myFavorites.map((char) => (
        <Card
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          image={char.image}
          onClose={() => dispatch(removeFav(char.id))}
        />
      ))}
    </MainDiv>
  );
};

export default Favorites;
