import { createReducer } from '@reduxjs/toolkit';

export const imageReducer = createReducer(
  {
    images: [], 
    loading: false,
    error: null,
    message: null,
  },
  {
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

    incrementViewCountRequest: (state) => {
      state.loading = true;
    },
    incrementViewCountSuccess: (state, action) => {
      state.loading = false;
      if (Array.isArray(state.images)) {
        state.images = state.images.map((image) =>
          image._id === action.payload._id ? action.payload : image
        );
      }
    },
    incrementViewCountFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  }
);
