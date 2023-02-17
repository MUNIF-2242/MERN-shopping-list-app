import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADING,
  USER_LOADED,
} from './types';

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  //Get token from localstorage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  //if token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  axios.get('/api/auth/user', config).then((res) =>
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    }).catch((err) => {
      dispatch(returnErrors(err.reponse.data, err.reponse.status));
      dispatch({
        type: AUTH_ERROR,
      });
    })
  );
};
