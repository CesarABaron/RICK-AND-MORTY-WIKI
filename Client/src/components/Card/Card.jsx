import styles from "../Card/card.module.css";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters, allFavorites, next } from "../../redux/actions";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

export default function Card(character) {
  const currentPage = useSelector((state) => state.currentPage);
  const favorites = useSelector((state) => state.myFavorites);
  // console.log("aquiiii", favorites.response === 1);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (favorites.response === 1) {
      if (isFav === false) {
        setIsFav(true);
      }
    }

    // const fff = character.users.some((user) => user.id === localStorage.id);
    // console.log("aaaaaa", fff);

    if (isFav === true) {
      dispatch(addFav({ id: localStorage.id, char: character.id }));
      setIsFav(false);
    }
  };

  return (
    <div className={styles.cardIndividual}>
      {/* character?.users.length !== 0 && */}
      {/* {character?.users.some((user) => user.id === localStorage.id) ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )} */}
      {isFav === true ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <p>Name :{character?.name}</p>
      <p>Status: {character?.status}</p>
      <p>Especies: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <p>Origin: {character?.origin}</p>
      <Link to={`/detail/${character?.id}`}>
        <img src={character?.image} alt="" />
      </Link>
    </div>
  );
}
