import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux/reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

