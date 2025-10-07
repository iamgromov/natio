import {
  SET_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
  type CountryActionTypes,
  type CountriesState,
} from './types';

const initialState: CountriesState = {
  error: null,
  list: [],
  status: 'idle',
};

export const countriesReducer = (
  state = initialState,
  action: CountryActionTypes
): CountriesState => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        error: null,
        status: 'loading',
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        status: 'rejected',
      };
    }

    case SET_COUNTRIES: {
      return {
        ...state,
        list: action.payload,
        status: 'received',
      };
    }

    default: {
      return state;
    }
  }
};
