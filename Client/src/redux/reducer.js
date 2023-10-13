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
  myFavoritesCoty2: [],
  allCharacters: [],
  current: [],
  characterByName: [],
  characterByNameCopy: [],
  loginAcces: [],
  createUser: false,
  paginateHomeView: [],
  currentPage: [],
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
        allCharacters: action.payload.slice(1, 20),
        myFavoritesCoty2: action.payload,
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
        charactersCopy: action.payload,
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

    // case PAGINATE:
    //   return {
    //     ...state,
    //     paginateHomeView: state.allCharacters.slice(
    //       // action.payload.num1,
    //       // action.payload.num2
    //       1,
    //       20
    //     ),
    //   };

    // case BACK:
    //   return {
    //     ...state,
    //     paginateHomeView: state.allCharacters.slice(
    //       action.payload.firstCard,
    //       action.payload.lastCard
    //     ),
    //     currentPage: action.payload.firstCard,
    //     currentPage: action.payload.lastCard,
    //   };

    // case NEXT:
    //   return {
    //     ...state,
    //     paginateHomeView: state.allCharacters.slice(
    //       action.payload.firstCard,
    //       action.payload.lastCard
    //     ),
    //   };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
