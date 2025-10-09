import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ACTION_TYPES, SLICE_NAMES, type CountriesState, type ICountry } from '../types';

import type { AsyncThunkConfig } from '../store';

export const loadCountries = createAsyncThunk<ICountry[], void, AsyncThunkConfig>(
  ACTION_TYPES.LOAD_COUNTRIES,
  async (_, { extra: { client, api } }) => {
    try {
      const response = await client.get(api.ALL_COUNTRIES);
      const countries = response.data;

      return countries;
    } catch (error) {
      // const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    }
  }
);

const initialState: CountriesState = {
  error: null,
  list: [],
  status: 'idle',
};

const countriesSlice = createSlice({
  name: SLICE_NAMES.COUNTRIES,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadCountries.pending, (state) => {
      state.error = null;
      state.status = 'loading';
    });
    builder.addCase(loadCountries.rejected, (state /* , action */) => {
      state.error = 'error';
      state.status = 'rejected';
    });
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'received';
    });
  },
});

export default countriesSlice.reducer;
