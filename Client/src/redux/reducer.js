import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  ALLFAVORITES,
  GET_ALL_CHARACTERS,
  GETBYNAME,
  GECURRENT,
  LOGIN,
} from "./actions";

let initialState = {
  myFavorites: [],
  myFavoritesCoty: [],
  allCharacters: [],
  current: [],
  characterByName: [],
  loginAcces: [],
};

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
        myFavorites: state.myFavoritesCoty.filter(
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
        myFavorites: action.payload,
        myFavoritesCoty: action.payload,
      };

    case GETBYNAME:
      return {
        ...state,
        characterByName: action.payload,
      };

    case GECURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case LOGIN:
      return {
        ...state,
        loginAcces: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
