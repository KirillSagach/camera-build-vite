import dayjs from 'dayjs';
import { CatalogItemTypes } from '../../types/catalog-item-type';
import { ItemTypeReviews } from '../../types/item-type';

function findItemForPopUp(itemId: number, catalogItems: CatalogItemTypes){
  return catalogItems.filter((item)=> item.id === itemId)[0];
}

function sortReviews(reviews: ItemTypeReviews){
  const itemsToSort = reviews.slice();

  return itemsToSort.sort((firstItem, secondItem) => dayjs(secondItem.createAt).diff(firstItem.createAt, 'second'));
}

export {findItemForPopUp, sortReviews};
