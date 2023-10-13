import styles from "../Card/card.module.css";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { allFavorites } from "../../redux/actions";

export default function Card(character) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFav({ id: localStorage.id, char: character.id }));
    dispatch(allFavorites({ id: localStorage.id }));
  };

  return (
    <div className={styles.cardIndividual}>
      {character.users.some((id) => id.id === localStorage.id) ? (
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
