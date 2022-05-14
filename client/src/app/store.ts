import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from '../components/Main/CategorySlice';
import { productSlice } from '../components/Main/ProductSlice';

export const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    products: productSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;