import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SLICE_NAMES, type ControlsState } from '../types';

const initialState: ControlsState = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: SLICE_NAMES.CONTROLS,
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;

export default controlsSlice.reducer;
