import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  ACTION_TYPES,
  SLICE_NAMES,
  type CurrentCountry,
  type DetailsState,
  type ICountry,
} from '../types';

import type { AsyncThunkConfig } from '../store';

export const loadCountryByName = createAsyncThunk<CurrentCountry, string, AsyncThunkConfig>(
  ACTION_TYPES.LOAD_COUNTRY,
  async (name, { extra: { client, api } }) => {
    try {
      const response = await client.get(api.searchByCountry(name));
      const country = response.data[0];

      return country;
    } catch (error) {
      // const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    }
  }
);

export const loadNeighborsByBorder = createAsyncThunk<ICountry[], string[], AsyncThunkConfig>(
  ACTION_TYPES.LOAD_NEIGBORS_BY_BORDERS,
  async (borders, { extra: { client, api } }) => {
    try {
      const response = await client.get(api.filterByCode(borders));
      const countries = response.data;

      return countries;
    } catch (error) {
      // const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    }
  }
);

const initialState: DetailsState = {
  currentCountry: null,
  error: null,
  neighbors: [],
  status: 'idle',
};

const detailsSlice = createSlice({
  name: SLICE_NAMES.DETAILS,
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(loadCountryByName.pending, (state) => {
      state.error = null;
      state.status = 'loading';
    });
    builder.addCase(loadCountryByName.rejected, (state /* , action */) => {
      state.error = 'error';
      state.status = 'rejected';
    });
    builder.addCase(loadCountryByName.fulfilled, (state, action) => {
      state.currentCountry = action.payload;
      state.status = 'received';
    });
    // builder.addCase(loadNeighborsByBorder.pending, (state) => {
    //   state.error = null;
    //   state.status = 'loading';
    // });
    // builder.addCase(loadNeighborsByBorder.rejected, (state /* , action */) => {
    //   state.error = 'error';
    //   state.status = 'rejected';
    // });
    builder.addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
      state.neighbors = action.payload.map((country) => country.name);
      state.status = 'received';
    });
  },
});
export const { clearDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
