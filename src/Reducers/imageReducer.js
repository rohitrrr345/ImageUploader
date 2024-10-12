// imageReducer.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const imageReducer = createReducer(initialState, {
  uploadImageRequest: (state) => {
    state.status = 'loading';
  },
  uploadImageSuccess: (state, action) => {
    state.status = 'succeeded';
    state.items.push(action.payload);
  },
  uploadImageFailure: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },

  fetchImagesRequest: (state) => {
    state.status = 'loading';
  },
  fetchImagesSuccess: (state, action) => {
    state.status = 'succeeded';
    state.items = action.payload;
  },
  fetchImagesFailure: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },

  incrementViewCountSuccess: (state, action) => {
    const image = state.items.find((img) => img._id === action.payload.imageId);
    if (image) {
      image.viewCount = action.payload.viewCount;
    }
  },
});
