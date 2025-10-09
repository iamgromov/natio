import {
  CLEAR_DETAILS,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
  type ClearDetailsAction,
  type CurrentCountry,
  type SetCountryAction,
  type SetErrorAction,
  type SetLoadingAction,
  type SetNeighborsAction,
} from './types';

import type { ICountry } from '../countries/types';
import type { AppThunk, ThunkExtraArg } from '../store';

const setLoading = (): SetLoadingAction => ({
  type: SET_LOADING,
});

const setError = (error: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

const setCountry = (country: CurrentCountry): SetCountryAction => ({
  type: SET_COUNTRY,
  payload: country,
});

export const clearDetails = (): ClearDetailsAction => ({
  type: CLEAR_DETAILS,
});

const setNeighbors = (countries: string[]): SetNeighborsAction => ({
  type: SET_NEIGHBORS,
  payload: countries,
});

export const loadCountryByName = (name: string): AppThunk<Promise<void>> => {
  return async (dispatch, _, { client, api }: ThunkExtraArg) => {
    dispatch(setLoading());

    try {
      const response = await client.get(api.searchByCountry(name));
      const country = response.data[0];

      dispatch(setCountry(country));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      dispatch(setError(errorMessage));
    }
  };
};

export const loadNeighborsByBorder = (borders: string[]): AppThunk<Promise<void>> => {
  return async (dispatch, _, { client, api }: ThunkExtraArg) => {
    try {
      const response = await client.get(api.filterByCode(borders));
      const countries: ICountry[] = response.data;
      const neighborNames = countries.map((country) => country.name);

      dispatch(setNeighbors(neighborNames));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      dispatch(setError(errorMessage));
    }
  };
};
