// authReducer.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false; // Should be false on failure
    state.error = action.payload;
  },

  signupRequest: (state) => {
    state.loading = true;
  },
  signupSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true; // Should be false on failure

    state.user = action.payload;
  },
  signupFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false; // Should be false on failure

    state.error = action.payload;
  },
  
  loadUserRequest: (state) => {
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
  logoutUserRequest: (state) => {
    state.loading = true;
  },
  logoutUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  logoutUserFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },


  clearError: (state) => {
    state.error = null;
  },
  
  clearMessage: (state) => {
    state.message = null;
  },
});
