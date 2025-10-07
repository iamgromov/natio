import { SET_THEME, type SetThemeAction, type ThemeType } from "./types";


export const setTheme = (theme: ThemeType): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});
