import {
  GET_ALL,
  GET_COUNTRIES,
  GET_HISTORICAL,
  GET_HISTORYDATES,
  GET_CONTINENTS,
  DATA_LOADING,
} from "./types";

const initialState = {
  all: {},
  countries: {},
  historical: {},
  historydates: {},
  continents: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        all: action.payload,
        loading: false,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case GET_HISTORICAL:
      return {
        ...state,
        historical: action.payload,
        loading: false,
      };
    case GET_HISTORYDATES:
      return {
        ...state,
        historydates: action.payload,
        loading: false,
      };
    case GET_CONTINENTS:
      return {
        ...state,
        continents: action.payload,
        loading: false,
      };

    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
