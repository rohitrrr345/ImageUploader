// imageReducer.js
import { createReducer } from '@reduxjs/toolkit';


export const imageReducer = createReducer({}, {
  uploadImageRequest: (state) => {
    state.loading = true;
  },
  uploadImageSuccess: (state, action) => {
    state.loading = false;
    state.images=action.payload.user;
    state.message=action.payload.message;
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

  incrementViewCountSuccess: (state, action) => {
    const image = state.items.find((img) => img._id === action.payload.imageId);
    if (image) {
      image.viewCount = action.payload.viewCount;
    }
  },
});
