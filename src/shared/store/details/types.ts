import type { Status } from '../store';

export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Flags {
  svg: string;
  png: string;
}

interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  hu: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
}

export interface CurrentCountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  independent: boolean;
}

export interface DetailsState {
  currentCountry: CurrentCountry | null;
  error: string | null;
  neighbors: string[];
  status: Status;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface SetCountryAction {
  type: typeof SET_COUNTRY;
  payload: CurrentCountry;
}

export interface ClearDetailsAction {
  type: typeof CLEAR_DETAILS;
}

export interface SetNeighborsAction {
  type: typeof SET_NEIGHBORS;
  payload: string[];
}

export type DetailsActionTypes =
  | SetCountryAction
  | SetLoadingAction
  | SetErrorAction
  | ClearDetailsAction
  | SetNeighborsAction;
