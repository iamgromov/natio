import { configureStore } from '@reduxjs/toolkit';
import axios, { type AxiosInstance } from 'axios';

import * as api from '../api';
import controlsReducer from './slices/controls-slice';
import countriesReducer from './slices/countries-slice';
import detailsReducer from './slices/details-slice';
import themeReducer from './slices/theme-slice';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailsReducer,
    theme: themeReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializebleCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface AsyncThunkConfig {
  extra: {
    client: AxiosInstance;
    api: typeof api;
  };
}
