export const SLICE_NAMES = {
  CONTROLS: '@@CONTROLS',
  COUNTRIES: '@@COUNTRIES',
  DETAILS: '@@DETAILS',
  THEME: '@@THEME',
};

export const ACTION_TYPES = {
  LOAD_COUNTRIES: `${SLICE_NAMES.COUNTRIES}/load-countries`,
  LOAD_COUNTRY: `${SLICE_NAMES.COUNTRIES}/load-country-by-name`,
  LOAD_NEIGBORS_BY_BORDERS: `${SLICE_NAMES.COUNTRIES}/load-neigbors-by-borders`,
};

export type ThemeType = 'light' | 'dark';

export interface ControlsState {
  search: string;
  region: string;
}

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

export type Status = 'idle' | 'loading' | 'received' | 'rejected';

export interface CountriesState {
  error: string | null;
  list: ICountry[];
  status: Status;
}

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
