import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { allFavorites, filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MainDiv, MainDiv2 } from "./styled.components";
import styles from "./favorite.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const copy = useSelector((state) => state.myFavoritesCoty);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    if (isFilter === false) {
      if (myFavorites !== copy) {
        dispatch(allFavorites({ id: localStorage.id }));
      }
    }
  }, [myFavorites]);

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    if (e.target.value === "allFavorite") {
      dispatch(allFavorites({ id: localStorage.id }));
    } else {
      dispatch(filterCards(e.target.value));
      setIsFilter(true);
    }
  };

  return (
    <div className={styles.contai}>
      <MainDiv>
        <MainDiv2>
          <select className={styles.select1} onChange={handleOrder}>
            <option value="A">A - Z</option>
            <option value="D">Z - A</option>
          </select>

          <select className={styles.select2} onChange={handleFilter}>
            <option value="allFavorite"> All Favorites </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </MainDiv2>
        {myFavorites && myFavorites?.length > 0 ? (
          myFavorites?.map((char) => {
            const FavId = char.user_favorite.UserId;
            {
              return (
                <Card
                  id={char?.id}
                  name={char?.name}
                  status={char?.status}
                  species={char?.species}
                  gender={char?.gender}
                  origin={char?.origin}
                  image={char?.image}
                  users={[{ id: FavId }]}
                />
              );
            }
          })
        ) : (
          <p className={styles.dontFound}>No favorites found.</p>
        )}
      </MainDiv>
    </div>
  );
};

export default Favorites;
