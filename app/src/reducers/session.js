import {
  SESSION_GET_REQUEST,
  SESSION_POST_FAILURE,
  SESSION_POST_REQUEST,
  SESSION_GET_SUCCESS,
  SESSION_GET_FAILURE,
  SESSION_POST_SUCCESS
} from '../actions/session';

const initalState = {
  data: {},
  isLoading: false,
  error: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SESSION_GET_REQUEST:
      return {
        ...state,
        data: {},
        isLoading: true,
        error: false
      };
    case SESSION_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };
    case SESSION_GET_FAILURE:
      return {
        ...state,
        data: {},
        isLoading: false,
        error: action.payload
      };
    case SESSION_POST_REQUEST:
      return {
        ...state,
        data: {},
        isLoading: true,
        error: false
      };
    case SESSION_POST_SUCCESS:
      return {
        ...state,
        data: {},
        isLoading: false,
        error: false
      };
    case SESSION_POST_FAILURE:
      return {
        ...state,
        data: {},
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
