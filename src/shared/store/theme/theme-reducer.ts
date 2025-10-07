import { SET_THEME, type ThemeActionTypes, type ThemeType } from './types';

const initialState: ThemeType = 'light';

export const themeReducer = (
  state: ThemeType = initialState,
  { type, payload }: ThemeActionTypes
): ThemeType => {
  switch (type) {
    case SET_THEME: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
