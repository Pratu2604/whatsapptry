import { configureStore } from '@reduxjs/toolkit'
// import contactSlice from '../feature/counter/contactSlice'
import contactSlice from '../feature/counter/contactSlice.ts';
// import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger);
})