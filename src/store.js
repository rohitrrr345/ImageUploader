// store.js
import { configureStore } from '@reduxjs/toolkit';
import { imageReducer } from './Reducers/imageReducer';
import { authReducer } from './Reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
  },
});

export default store;
