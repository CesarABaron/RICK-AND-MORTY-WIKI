import axios from "axios";
import Swal from "sweetalert2";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ALLFAVORITES = "ALLFAVORITES";
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GETBYNAME = "GETBYNAME";
export const GECURRENT = "GECURRENT";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const addFav = (character) => {
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

export const getAllCharacters = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/allCharacters`
      );

      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const getCharactersByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character?name=${name}`
      );

      dispatch({
        type: GETBYNAME,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const allFavorites = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/rickandmorty/favorites`,
        user
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

export const loginUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/rickandmorty/login`,
        user
      );
      localStorage.setItem("access", response.data.acces);
      localStorage.setItem("id", response.data.id);
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
    } catch (error) {
      Swal.fire(error.response.data);
    }
  };
};

export const registerUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/rickandmorty/register`,
        user
      );

      response && Swal.fire("Creado con exito");

      dispatch({
        type: REGISTER,
        payload: response.data,
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  };
};
