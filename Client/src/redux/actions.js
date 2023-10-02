import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ALLFAVORITES = "ALLFAVORITES";
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";

export const addFav = (character) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      dispatch({ type: ADD_FAV, payload: response.data });
    } catch (error) {}
  };
};

export const removeFav = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      dispatch({
        type: REMOVE_FAV,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}

export function allFavorites() {
  return {
    type: ALLFAVORITES,
  };
}

export const getAllCharacters = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/allCharacters`
      );
      console.log("action", response.data);
      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data,
      });
    } catch (error) {}
  };
};
