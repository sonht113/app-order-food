import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../models';

let initialState: Category[] = []

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: initialState
  },
  reducers: {
    setCategories: (state, action:PayloadAction<Category[]>) => {
      return void(state.categories = action.payload)
    }
  }
})