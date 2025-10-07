export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: ThemeType;
}

export type ThemeActionTypes = SetThemeAction;

export type ThemeType = 'light' | 'dark';

export const SET_THEME = '@@theme/SET_THEME';
