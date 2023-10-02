import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ALLFAVORITES = "ALLFAVORITES";
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GETBYNAME = "GETBYNAME";
export const GECURRENT = "GECURRENT";

export const addFav = (character) => {
  console.log(character);
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/favorite",
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

export const getAllCharacters = (page) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/allCharacters?page=${page}`
      );
      console.log("action", response.data);
      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const getCharactersByName = (name, page) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character?name=${name}&page=${page}`
      );

      dispatch({
        type: GETBYNAME,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const allFavorites = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/favorites`
      );

      dispatch({
        type: ALLFAVORITES,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const currentP = (data) => {
  return async function (dispatch) {
    console.log("current", data);
    dispatch({
      type: GECURRENT,
      payload: data,
    });
  };
};
