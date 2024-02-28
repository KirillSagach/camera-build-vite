import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../../types/reducer';
import { loadCatalogItems } from './action';

export const catalogReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadCatalogItems, (state, action) => {
        state.catalogItems = action.payload;
      });
  }
);
