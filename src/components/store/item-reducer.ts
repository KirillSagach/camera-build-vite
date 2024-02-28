import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../../types/reducer';
import { loadCurrentItem, loadCurrentItemReviews } from './action';

export const itemReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadCurrentItem, (state, action) => {
        state.currentItem = action.payload;
      })
      .addCase(loadCurrentItemReviews, (state, action) => {
        state.currentItemReviews = action.payload;
      });
  }
);
