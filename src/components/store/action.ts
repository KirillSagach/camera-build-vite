import { createAction } from '@reduxjs/toolkit';
import { CatalogItemTypes } from '../../types/catalog-item-type';
import { CatalogItemType } from '../../types/common-type';

export const loadCatalogItems = createAction('data/load', (data: CatalogItemTypes) => ({
  payload: data
}));

export const loadCurrentItem = createAction('camera/load', (data: CatalogItemType) => ({
  payload: data
}));
