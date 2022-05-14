import {createSelector} from '@reduxjs/toolkit';

// Category
// @ts-ignore
const selectorListCategory = (state) => {
  return state.categories;
}
export const selectRemainingListCategory = createSelector(
  selectorListCategory,
  (categories) => {
    return categories.categories
  }
)

// Products
// @ts-ignore
const selectorResultProduct = (state) => {
  return state.products;
}
export const selectRemainingProductResult = createSelector(
  selectorResultProduct,
  (result) => {
    return result.productResult
  }
)