import axios from "axios";
import {
  GET_ALL,
  GET_COUNTRIES,
  GET_HISTORICAL,
  GET_HISTORYDATES,
  GET_CONTINENTS,
  DATA_LOADING,
} from "./types";

export const getAllData = () => (dispatch) => {
  dispatch(setDataLoading());
  axios
    .get("https://corona.lmao.ninja/all")
    .then((res) =>
      dispatch({
        type: GET_ALL,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getCountryData = () => (dispatch) => {
  dispatch(setDataLoading());
  axios
    .get("https://corona.lmao.ninja/countries")
    .then((res) =>
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getHistoricalData = () => (dispatch) => {
  dispatch(setDataLoading());
  axios
    .get("https://corona.lmao.ninja/v2/historical")
    .then((res) =>
      dispatch({
        type: GET_HISTORICAL,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getHistoryDatesData = () => (dispatch) => {
  dispatch(setDataLoading());
  axios
    .get("https://corona.lmao.ninja/v2/historical/all")
    .then((res) =>
      dispatch({
        type: GET_HISTORYDATES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getContinentsData = () => (dispatch) => {
  dispatch(setDataLoading());
  axios
    .get("https://disease.sh/v2/continents")
    .then((res) =>
      dispatch({
        type: GET_CONTINENTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setDataLoading = () => {
  return {
    type: DATA_LOADING,
  };
};
