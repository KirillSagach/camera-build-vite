import { createAction } from '@reduxjs/toolkit';
import { CatalogItemTypes } from '../../types/catalog-item-type';

export const loadCatalogItems = createAction('data/load', (data: CatalogItemTypes) => ({
  payload: data
}));
