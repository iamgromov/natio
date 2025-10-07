export const SET_SEARCH = '@@controls/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS';

export interface ControlsState {
  search: string;
  region: string;
}

export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

export interface SetRegionAction {
  type: typeof SET_REGION;
  payload: string;
}

export interface ClearControlsAction {
  type: typeof CLEAR_CONTROLS;
}

export type ControlsActionType = SetSearchAction | SetRegionAction | ClearControlsAction;
