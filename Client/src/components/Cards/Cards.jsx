import Card from "../Card/Card";
import styles from "../Cards/cards.module.css";
import { useState } from "react";
import { getAllCharacters } from "../../redux/actions";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cards({ characters }) {
  const [page, setPage] = useState({
    firstCard: 1,
    lastCard: 20,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <div className={styles.allcards}>
      {characters?.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            image={char.image}
            users={char.Users}
          />
        );
      })}
    </div>
  );
}

export default Cards;
