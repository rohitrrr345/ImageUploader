// authActions.js
import axios from 'axios';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({
      type: 'loginSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'loginFailure',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const signupUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'signupRequest' });

    const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/users/signup`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({
      type: 'signupSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'signupFailure',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
export const loadUser = () => async dispatch => {
    try {
      dispatch({ type: 'loadUserRequest' });
  
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/users/me`,
  
        {
          withCredentials: true,
        }
      );
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
      dispatch({ type: 'loadUserFail', payload: error.response.data.message });
    }
  };
