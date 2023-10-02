import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const Detail = () =>{

const [character,setCharacter] = useState([])

const  {id} = useParams() 

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);



 return <div>
   <img src={character.image && character.image} alt="" />
            <h1>Name: "{character.name && character.name}" </h1>
            <h1>Species: "{character.species && character.species}" </h1>
            <h1>Gender: "{character.gender && character.gender}" </h1>
            <h1>Origin: "{character.origin?.name && character.origin?.name}" </h1>
    </div>   
}

export default Detail