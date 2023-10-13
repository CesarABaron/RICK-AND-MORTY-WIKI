import styles from "../Card/card.module.css";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters, allFavorites, next, add } from "../../redux/actions";
import { useEffect, useState } from "react";

export default function Card(character) {
  const currentPage = useSelector((state) => state.currentPage);
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {};

  return (
    <div className={styles.cardIndividual}>
      <button onClick={handleFavorite}>❤️</button>

      <button onClick={handleFavorite}>🤍</button>

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
