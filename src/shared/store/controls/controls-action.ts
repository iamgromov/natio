import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from './types';

export const setSearch = (search: string) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region: string) => ({
  type: SET_REGION,
  payload: region,
});

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
});
