import {
  SET_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
  type ICountry,
  type SetCountriesAction,
  type SetErrorAction,
  type SetLoadingAction,
} from './types';

import type { AppThunk, ThunkExtraArg } from '../store';

export const setCountries = (countries: ICountry[]): SetCountriesAction => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setLoading = (): SetLoadingAction => ({
  type: SET_LOADING,
});

export const setError = (error: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

export const loadCountries = (): AppThunk<Promise<void>> => {
  return async (dispatch, _, { client, api }: ThunkExtraArg) => {
    dispatch(setLoading());

    try {
      const response = await client.get(api.ALL_COUNTRIES);
      const countries = response.data;

      dispatch(setCountries(countries));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      dispatch(setError(errorMessage));
    }
  };
};
