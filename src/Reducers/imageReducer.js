import { createReducer } from '@reduxjs/toolkit';

export const imageReducer = createReducer({}, {
  // Upload image actions
  uploadImageRequest: (state) => {
    state.loading = true;
  },
  uploadImageSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  uploadImageFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Fetch images actions
  fetchImagesRequest: (state) => {
    state.loading = true;
  },
  fetchImagesSuccess: (state, action) => {
    state.loading = false;
    state.images = action.payload;
  },
  fetchImagesFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Increment view count actions
  incrementViewCountRequest: (state) => {
    state.loading = true;
  },
  incrementViewCountSuccess: (state, action) => {
    state.loading = false;
    state.viewCount = action.payload.viewCount; // Assuming the response contains viewCount
  },
  incrementViewCountFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Clear error
  clearError: (state) => {
    state.error = null;
  },

  // Clear message
  clearMessage: (state) => {
    state.message = null;
  },
});
