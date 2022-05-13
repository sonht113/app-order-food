import {createSelector} from '@reduxjs/toolkit';
import { Category } from '../models';

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