import { CatalogItemTypes } from '../../types/catalog-item-type';

function findItemForPopUp(itemId: number, catalogItems: CatalogItemTypes){
  return catalogItems.filter((item)=> item.id === itemId)[0];
}

export {findItemForPopUp};
