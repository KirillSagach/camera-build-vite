import { createReducer } from '@reduxjs/toolkit';
import { CatalogItemTypes } from '../../types/catalog-item-type';
import { loadCatalogItems, loadCurrentItem, loadCurrentItemReviews } from './action';
import { ItemType, ItemTypeReviews } from '../../types/item-type';

type InitialState = {
  catalogItems: CatalogItemTypes;
  currentItem: ItemType;
  currentItemReviews: ItemTypeReviews;
}

const initialState: InitialState = {
  catalogItems: [],
  currentItem: {
    id: 0,
    name: '',
    vendorCode: '',
    type: 0,
    category: 0,
    description: '',
    level: 0,
    price: 0,
    rating: 0,
    reviewCount: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  },
  currentItemReviews: []
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadCatalogItems, (state, action) => {
        state.catalogItems = action.payload;
      })
      .addCase(loadCurrentItem, (state, action) => {
        state.currentItem = action.payload;
      })
      .addCase(loadCurrentItemReviews, (state, action) => {
        state.currentItemReviews = action.payload;
      });
  }
);
