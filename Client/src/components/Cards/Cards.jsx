import Card from "../Card/Card";
import styles from "../Cards/cards.module.css";
import { useState } from "react";
import { getAllCharacters } from "../../redux/actions";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cards({ characters }) {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  const [currentPageOnEnter, setCurrentPageOnEnter] = useState(currentPage);

  console.log("prev", currentPage.prevState);

  useEffect(() => {
    dispatch(getAllCharacters(currentPage));
  }, [currentPage, currentPageOnEnter]);

  return (
    <div className={styles.allcards}>
      {characters.map((char) => {
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
            // onClose={onClose}
          />
        );
      })}

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <button onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
    </div>
  );
}

export default Cards;
