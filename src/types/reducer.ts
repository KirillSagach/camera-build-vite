import { CatalogItemTypes } from './catalog-item-type';
import { ItemType, ItemTypeReviews } from './item-type';

export type InitialState = {
  catalogItems: CatalogItemTypes;
  currentItem: ItemType;
  currentItemReviews: ItemTypeReviews;
}

export const initialState: InitialState = {
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
