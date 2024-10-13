import { createReducer } from '@reduxjs/toolkit';

export const imageReducer = createReducer(
  {
    images: [], // Ensure this is initialized as an array
    loading: false,
    error: null,
    message: null,
  },
  {
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
      state.images = action.payload; // Assuming the payload is an array of images
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
      // Ensure `state.images` is an array before using map
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

    // Clear error
    clearError: (state) => {
      state.error = null;
    },

    // Clear message
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
