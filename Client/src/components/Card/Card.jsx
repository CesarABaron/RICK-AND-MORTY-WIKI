import styles from "../Card/card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Card(character) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const allCharacters = useSelector((state) => state.allCharacters);

  const [isfav, setIsfav] = useState(false);

  const handleFavorite = () => {
    if (isfav === true) {
      setIsfav(false);
      dispatch(removeFav(character.id));
    }

    if (isfav === false) {
      setIsfav(true);
      dispatch(addFav(character));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsfav(false);
      }
    });

    //  allCharacters.forEach((fav) => {
    //    if (fav.id === character.id) {
    //      setIsfav(true);
    //    }
    //  });
  }, [myFavorites, allCharacters]);

  return (
    <div className={styles.cardIndividual}>
      {isfav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {/* <button
        onClick={() => {
          character.onClose(character.id);
        }}
      >
        x
      </button> */}

      <p>Name :{character.name}</p>
      <p>Status: {character.status}</p>
      <p>Especies: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin}</p>
      <Link to={`/detail/${character.id}`}>
        <img src={character.image} alt="" />
      </Link>
    </div>
  );
}
