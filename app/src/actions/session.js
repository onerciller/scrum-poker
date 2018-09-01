import axios from 'axios';
import config from '../config';

export const SESSION_POST_REQUEST = 'SESSION_POST_REQUEST';
export const SESSION_POST_SUCCESS = 'SESSION_POST_SUCCESS';
export const SESSION_POST_FAILURE = 'SESSION_POST_FAILURE';

export const SESSION_GET_REQUEST = 'SESSION_GET_REQUEST';
export const SESSION_GET_SUCCESS = 'SESSION_GET_SUCCESS';
export const SESSION_GET_FAILURE = 'SESSION_GET_FAILURE';

export const createSession = formData => async dispatch => {
  dispatch({ type: SESSION_POST_REQUEST, payload: '' });
  try {
		const response = await axios.post(`${config.api}/sessions`, formData);
		window.location.href = `/master-panel/${response.data.id}`;
    dispatch({ type: SESSION_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SESSION_POST_FAILURE, payload: error });
  }
};

export const getSession = sessionID => async dispatch => {
	dispatch({ type: SESSION_GET_REQUEST, payload: '' });
  try {
		const response = await axios.get(`${config.api}/sessions/${sessionID}`);

    dispatch({ type: SESSION_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SESSION_GET_FAILURE, payload: error });
  }
};
