// authActions.js
import axios from 'axios';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/users/login`, credentials, {
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
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/logout`, {
      withCredentials: true, // Include cookies with the request
    });

    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response?.data?.message || "Logout failed",
    });
  }
};