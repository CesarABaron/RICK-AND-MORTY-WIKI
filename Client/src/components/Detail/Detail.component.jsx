import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";
const Detail = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();

  const serverURL = "https://rickandmortyserver-hbxk.onrender.com";
  // const serverURL = "http://localhost:3001";

  useEffect(() => {
    axios(`${serverURL}/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      }
    });

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
      <Link to="/home">
        <button className={styles.btnHome}>Back to Home</button>
      </Link>
    </div>
  );
};

export default Detail;
