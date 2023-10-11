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
  REGISTER,
  PAGINATE,
  CLEAR,
  NEXT,
  BACK,
} from "./actions";

let initialState = {
  myFavorites: [],
  myFavoritesCoty: [],
  allCharacters: [],
  current: [],
  characterByName: [],
  loginAcces: [],
  createUser: false,
  paginateHomeView: [],
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
        allCharacters: action.payload.slice(0, 18),
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

    case CLEAR:
      return {
        ...state,
        myFavorites: {},
        myFavoritesCoty: {},
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

    case REGISTER:
      return {
        ...state,
        createUser: action.payload,
      };

    case PAGINATE:
      return {
        ...state,
        paginateHomeView: state.allCharacters.slice(
          action.payload.num1,
          action.payload.num2
        ),
      };

    case BACK:
      return {
        ...state,
        paginateHomeView: state.allCharacters.slice(
          action.payload.card1,
          action.payload.card2
        ),
      };

    case NEXT:
      return {
        ...state,
        paginateHomeView: state.allCharacters.slice(
          action.payload.card1,
          action.payload.card2
        ),
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
