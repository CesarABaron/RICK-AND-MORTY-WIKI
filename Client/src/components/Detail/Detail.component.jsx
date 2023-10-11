import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      }
    );

    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={character.image && character.image}
          alt=""
        />
        <div className={styles.divText}>
          <h1 className={styles.text}>
            Name: "{character.name && character.name}"{" "}
          </h1>
          <h1 className={styles.text}>
            Species: "{character.species && character.species}"{" "}
          </h1>
          <h1 className={styles.text}>
            Gender: "{character.gender && character.gender}"{" "}
          </h1>
          <h1 className={styles.text}>
            Origin: "{character.origin && character.origin}"{" "}
          </h1>
          <h1 className={styles.text}>
            status: "{character.status && character.status}"
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Detail;
