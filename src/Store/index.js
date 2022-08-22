import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/index';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
