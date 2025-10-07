import {
  CLEAR_CONTROLS,
  SET_REGION,
  SET_SEARCH,
  type ControlsActionType,
  type ControlsState,
} from './types';

const initialState: ControlsState = {
  search: '',
  region: '',
};

export const controlsReducer = (
  state = initialState,
  action: ControlsActionType
): ControlsState => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case SET_REGION: {
      return {
        ...state,
        region: action.payload,
      };
    }

    case CLEAR_CONTROLS: {
      return {
        ...state,
        search: '',
        region: '',
      };
    }

    default: {
      return state;
    }
  }
};
