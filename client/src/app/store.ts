import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from '../components/Main/CategorySlice';

export const store = configureStore({
  reducer: {
    categories: categorySlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;