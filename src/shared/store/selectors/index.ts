import type { RootState } from '../store';

export const selectSearch = (state: RootState) => state.controls.search;

export const selectRegion = (state: RootState) => state.controls.region;

export const selectControls = (state: RootState) => state.controls;

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;

export const selectVisibleCountries = (state: RootState, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
  );
};

export const selectCurrentCountry = (state: RootState) => state.details.currentCountry;

export const selectDetails = (state: RootState) => state.details;

export const selectNeighbors = (state: RootState) => state.details.neighbors;
