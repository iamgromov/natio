import {
  CLEAR_DETAILS,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
  type DetailsActionTypes,
  type DetailsState,
} from './types';

const initialState: DetailsState = {
  currentCountry: null,
  error: null,
  neighbors: [],
  status: 'idle',
};

export const detailsReducer = (state = initialState, action: DetailsActionTypes): DetailsState => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        error: null,
        status: 'loading',
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        status: 'rejected',
      };
    }

    case SET_COUNTRY: {
      return {
        ...state,
        currentCountry: action.payload,
        status: 'received',
      };
    }

    case CLEAR_DETAILS: {
      return {
        ...state,
        currentCountry: null,
        status: 'loading',
      };
    }

    case SET_NEIGHBORS: {
      return {
        ...state,
        neighbors: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
