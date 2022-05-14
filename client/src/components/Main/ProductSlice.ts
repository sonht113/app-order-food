import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ListResponse } from '../../models';

let initialState: Object = {}
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productResult: initialState
  },
  reducers: {
    setProducts: (state, action:PayloadAction<ListResponse<Product>>) => {
     state.productResult = action.payload
    }
  }
})