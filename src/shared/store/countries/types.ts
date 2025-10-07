import type { Status } from "../store";

export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  independent: boolean;
}

export interface CountriesState {
  error: string | null;
  list: ICountry[];
  status: Status;
}

export interface SetCountriesAction {
  type: typeof SET_COUNTRIES;
  payload: ICountry[];
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type CountryActionTypes = SetCountriesAction | SetLoadingAction | SetErrorAction;
