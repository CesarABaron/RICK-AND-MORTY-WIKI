import Card from "../Card/Card";
import styles from "../Cards/cards.module.css";

function Cards({ characters }) {
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
