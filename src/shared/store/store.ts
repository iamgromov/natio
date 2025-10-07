import {
  createStore,
  compose,
  applyMiddleware,
  type AnyAction,
  type Store,
  type Action,
} from 'redux';
import thunk, { type ThunkAction, type ThunkMiddleware } from 'redux-thunk';
import axios, { type AxiosInstance } from 'axios';

import { rootReducer } from './root-reducer';
import * as api from '../api/config';
import type { CountryActionTypes } from './countries/types';
import type { DetailsActionTypes } from './details/types';

export interface ThunkExtraArg {
  client: AxiosInstance;
  api: typeof api;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = Store<RootState, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunkExtraArg,
  CountryActionTypes | DetailsActionTypes | Action<string>
>;

export type Status = 'idle' | 'loading' | 'received' | 'rejected';

type AppThunkMiddleware = ThunkMiddleware<RootState, AnyAction, ThunkExtraArg>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: AppStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      }) as AppThunkMiddleware
    )
  )
);

export { store };
