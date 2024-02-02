import { CatalogItemType } from './common-type';

export type ItemType = CatalogItemType;

export type ItemTypeReview = {
    id: string;
    createAt: string;
    cameraId: number;
    userName: string;
    advantage: string;
    disadvantage: string;
    review: string;
    rating: number;
}

export type ItemTypeReviews = ItemTypeReview[];

