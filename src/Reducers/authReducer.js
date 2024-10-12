// authReducer.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
 
};

export const authReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated=true;
    state.user = action.payload;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated=true;

    state.error = action.payload;
  },

  signupRequest: (state) => {
    state.loading = true;
  },
  signupSuccess: (state, action) => {
    state.loading =false;
    state.user = action.payload;
  },
  signupFailure: (state, action) => {
    state.loading = false
    state.error = action.payload;
  },
  loadUserRequest: state => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  loadUserFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  clearError: state => {
    state.error = null;
  },
  clearMessage: state => {
    state.message = null;
  },
});
