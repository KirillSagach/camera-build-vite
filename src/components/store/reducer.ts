import { createReducer } from '@reduxjs/toolkit';
import { CatalogItemTypes } from '../../types/catalog-item-type';
import { loadCatalogItems } from './action';

type InitialState = {
  catalogItems: CatalogItemTypes;
}

const initialState: InitialState = {
  catalogItems: []
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadCatalogItems, (state, action) => {
        state.catalogItems = action.payload;
      });
  }
);
