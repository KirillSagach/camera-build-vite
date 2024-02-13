import { PopUpType } from '../../types/common-type';
import CatalogItem from './main-catalog-item';

type CatalogItemsProps = {
  onHandleClick: (showPopUp: boolean, popType: PopUpType) => void;
  onHandleItemHover: (id: number) => void;
  isPopUpShow: boolean;
  currentPage: number;
}

function CatalogItems({ onHandleClick,onHandleItemHover,isPopUpShow,currentPage }: CatalogItemsProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      <CatalogItem
        onHandleClick = {onHandleClick}
        onHandleItemHover = {onHandleItemHover}
        isPopUpShow = {isPopUpShow}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CatalogItems;
