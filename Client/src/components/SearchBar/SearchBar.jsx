import styles from "../SearchBar/searchbar.module.css"
import { useState } from "react";
import { NavLink} from "react-router-dom";


 function SearchBar(props) {

const [id,setid] = useState("")

const handleChange = (e)=> {
    setid(e.target.value) 
}

   return (
      <div className={styles.barra}>
         <input type='search' onChange={handleChange} />
         <button onClick={() => {props.onSearch(id)}} >Agregar</button>
         <NavLink  to="/favorites"> <button>Favorites</button>  </NavLink>
         <NavLink  to="/home"> <button>Home</button>  </NavLink>
         <NavLink to="/about"> <button>About</button>  </NavLink>
      


      </div>
   );
}




export default SearchBar