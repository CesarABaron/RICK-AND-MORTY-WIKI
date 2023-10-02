import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  ALLFAVORITES,
  GET_ALL_CHARACTERS,
} from "./actions";

let initialState = { myFavorites: [], allCharacters: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };

    case ORDER:
      const charactersCopy = state.myFavorites;
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? charactersCopy.sort((a, b) => a.id - b.id)
            : charactersCopy.sort((a, b) => b.id - a.id),
      };

    case ALLFAVORITES:
      return {
        ...state,
        allCharacters: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
